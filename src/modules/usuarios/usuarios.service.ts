import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import {
  CreateUsuariosInput,
  CreateUsuariosInputInterno,
  CreateUsuariosResponse,
} from './dto/inputs/create-usuarios.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from '@/entities/usuarios.entity';
import { FindOneOptions, In, Repository } from 'typeorm';
import { PartialType } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
import { Lojas } from '@/entities/lojas.entity';
import { TPayload } from '@/types';
import { Roles } from '@/entities/roles.entity';
import { UpdateUsuariosInputInterno } from './dto/inputs/update-usuarios.input';

export class FindCargaObjetoDTO extends PartialType(Usuarios) {}

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly usuariosRepository: Repository<Usuarios>,
    @InjectRepository(Lojas)
    private readonly lojasRepository: Repository<Lojas>,
    @InjectRepository(Roles)
    private readonly rolesRepository: Repository<Roles>,
  ) {}

  async create(input: CreateUsuariosInput): Promise<CreateUsuariosResponse> {
    const isOnlyEmail = await this.findOne({
      where: { email: input.email },
    });

    if (isOnlyEmail)
      throw new ConflictException('Email já cadastrado na base de dados!');

    const newLoja = new Lojas();
    newLoja.atualizadoEm = null;
    newLoja.endereco = input?.loja?.endereco;
    newLoja.nome = input?.loja?.nome;

    const responseLoja = await this.lojasRepository.save(newLoja);

    const newUsuario = new Usuarios();
    newUsuario.atualizadoEm = null;
    newUsuario.nome = input?.nome;
    newUsuario.email = input?.email;
    newUsuario.lojaId = responseLoja.id;

    const password = await bcrypt.hash(input.senha, 11);
    const responseUsuario = await this.usuariosRepository.save({
      ...newUsuario,
      senha: password,
    });

    return responseUsuario;
  }

  async createInterno(
    input: CreateUsuariosInputInterno,
    user: TPayload,
  ): Promise<CreateUsuariosResponse> {
    const isOnlyEmail = await this.findOne({
      where: { email: input.email },
    });

    if (isOnlyEmail)
      throw new ConflictException('Email já cadastrado na base de dados!');

    const existRole = await this.rolesRepository.findBy({
      id: In(input.roles),
    });

    if (!existRole)
      throw new BadRequestException('Não foi encontrado nenhum role');

    const responseUser = await this.usuariosRepository.findOne({
      where: { id: user.userId },
      relations: ['loja'],
    });

    if (!responseUser) throw new BadRequestException('Loja não encontrado!');

    const newUsuario = new Usuarios();
    newUsuario.atualizadoEm = null;
    newUsuario.nome = input?.nome;
    newUsuario.email = input?.email;
    newUsuario.lojaId = responseUser.loja.id;
    newUsuario.roles = existRole;

    const password = await bcrypt.hash(input.senha, 11);
    const responseUsuario = await this.usuariosRepository.save({
      ...newUsuario,
      senha: password,
    });

    return responseUsuario;
  }

  async findAll(user: TPayload) {
    const response = await this.usuariosRepository.find({
      where: { lojaId: user.lojaId },
    });
    return response;
  }

  async findOne(options: FindOneOptions<Usuarios>) {
    return this.usuariosRepository.findOne(options);
  }

  async updateInterno(
    input: UpdateUsuariosInputInterno,
    user: TPayload,
  ): Promise<CreateUsuariosResponse> {
    const isOnlyUsuario = await this.findOne({
      where: { id: input.id },
    });

    if (!isOnlyUsuario)
      throw new BadRequestException('Usuário não encontrado!');

    const isOnlyEmail = await this.findOne({
      where: { email: input.email },
    });

    if (isOnlyEmail && input.id !== isOnlyEmail.id) {
      throw new ConflictException('Email já cadastrado na base de dados!');
    }

    const existRole = await this.rolesRepository.findBy({
      id: In(input.roles),
    });

    if (!existRole)
      throw new BadRequestException('Não foi encontrado nenhum role');

    const responseUser = await this.usuariosRepository.findOne({
      where: { id: user.userId },
      relations: ['loja'],
    });

    if (!responseUser) throw new BadRequestException('Loja não encontrado!');

    const newUsuario = new Usuarios();
    newUsuario.atualizadoEm = null;
    newUsuario.nome = input?.nome;
    newUsuario.email = input?.email;
    newUsuario.lojaId = responseUser.loja.id;
    newUsuario.roles = existRole;

    const password = await bcrypt.hash(input.senha, 11);
    const responseUsuario = await this.usuariosRepository.save({
      ...newUsuario,
      senha: password,
    });

    return responseUsuario;
  }
}
