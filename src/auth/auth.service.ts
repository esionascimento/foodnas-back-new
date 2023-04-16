import { UsuariosService } from '@/modules/usuarios/usuarios.service';
import { Injectable } from '@nestjs/common';

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
}
