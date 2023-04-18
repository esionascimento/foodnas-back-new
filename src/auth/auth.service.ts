import { UsuariosService } from '@/modules/usuarios/usuarios.service';
import { Injectable } from '@nestjs/common';
import { LoginUsuarioInput } from './dto/login-user.input';

@Injectable()
export class AuthService {
  constructor(private userService: UsuariosService) {}

  async validateUser(nome: string, senha: string): Promise<any> {
    const user = await this.userService.findOne(nome);

    if (user && user.senha === senha) {
      const { senha, ...result } = user;
      return result;
    }

    return null;
  }

  async login(loginUsuarioInput: LoginUsuarioInput) {
    const user = await this.userService.findOne(loginUsuarioInput.nome);

    return {
      accessToken: 'jwt', // TODO: implementar jwt
      user,
    };
  }
}
