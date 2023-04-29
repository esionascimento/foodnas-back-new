import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  CreateUsuariosInput,
  CreateUsuariosResponse,
} from './dto/inputs/create-usuarios.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from '@/entities/usuarios.entity';
import { Repository } from 'typeorm';
import { PartialType } from '@nestjs/graphql';

export class FindCargaObjetoDTO extends PartialType(Usuarios) {}

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly usuariosRepository: Repository<Usuarios>,
  ) {}

  private readonly users = [
    {
      id: 1,
      nome: 'lucal',
      senha: 'senhaforte',
    },
    {
      id: 2,
      nome: 'carlos',
      senha: 'senhaforte',
    },
  ];

  async create(
    createUserDto: CreateUsuariosInput,
  ): Promise<CreateUsuariosResponse> {
    const isOnlyEmail = await this.findOne({ email: createUserDto.email });
    console.log('isOnlyEmail: ', isOnlyEmail);

    if (isOnlyEmail) return this.usuariosRepository.save(createUserDto);
    // console.log('response: ', response);
    // return { nome: response.nome, email: response.email };
  }

  findAll() {
    return this.users;
  }

  async findOne(options: FindCargaObjetoDTO) {
    return this.usuariosRepository.findOne({ where: options });
  }
}
