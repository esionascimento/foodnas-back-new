import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fornecedores } from '@/entities/fornecedores.entity';
import { FindOneOptions, In, Repository } from 'typeorm';
import { CreateOneRolesInput } from './dto/inputs/create-roles.input';
import { TPayload } from '@/types';
import { Permissoes } from '@/entities/permissoes.entity';
import { Roles } from '@/entities/roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private readonly rolesRepository: Repository<Roles>,
    @InjectRepository(Permissoes)
    private readonly permissoesRepository: Repository<Permissoes>,
  ) {}

  async create(input: CreateOneRolesInput, user: TPayload): Promise<Roles> {
    const existRole = await this.findOne({ where: { nome: input.nome } });

    if (existRole) throw new BadRequestException('Role já existe!');

    const existPermissao = await this.permissoesRepository.findBy({
      id: In(input.permissoes),
    });

    const newRoles = new Roles();
    newRoles.atualizadoEm = null;
    newRoles.nome = input?.nome;
    newRoles.descricao = input?.descricao;
    newRoles.permissoes = existPermissao;

    const responseRoles = await this.rolesRepository.save(newRoles);

    if (!responseRoles) {
      throw new BadRequestException('Falha criar permissão');
    }
    return responseRoles;
  }

  async findOne(options: FindOneOptions<Roles>) {
    return this.rolesRepository.findOne(options);
  }
}
