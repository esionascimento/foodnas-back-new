import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUsuariosInput } from './dto/inputs/create-usuarios.input';

@Injectable()
export class UsuariosService {
  private readonly users = [
    {
      id: 1,
      nome: 'lucal',
      senha: 'senhaforte'
    },
    {
      id: 2,
      nome: 'carlos',
      senha: 'senhaforte'
    }
  ];

  create(createUserDto: CreateUsuariosInput) {
    return createUserDto;
  }

  findAll() {
    return this.users;
  }

  findOne(nome: string) {
    return this.users.find((user) => user.nome === nome)
  }
}
