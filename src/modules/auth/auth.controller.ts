import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Usuario } from 'src/entities/usuarios.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async createUser(
    @Body('password') password: string,
    @Body('username') username: string,
  ): Promise<Usuario> {
    // const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    // const result = await this.usersService.createUser(
    //     username,
    //     hashedPassword,
    // );
    return;
  }
}
