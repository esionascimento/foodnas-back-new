import { UsuariosService } from '@/modules/usuarios/usuarios.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginUsuarioInput } from './dto/login-user.input';
import { Usuarios } from '@/entities/usuarios.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, senha: string): Promise<any> {
    const user = await this.userService.findOne({
      where: { email },
      relations: ['roles'],
      select: {
        id: true,
        nome: true,
        lojaId: true,
        senha: true,
        email: true,
        roles: {
          id: true,
          nome: true,
        },
      },
    });

    if (!user) throw new BadRequestException('Usuário inválido!');

    const validPass = await bcrypt.compare(senha, user.senha);

    if (user && validPass) {
      const { senha, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: Usuarios) {
    const payload = {
      username: user.nome,
      sub: user.id,
      lojaId: user.lojaId,
      roles: user.roles,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      usuario: user,
    };
  }
}
