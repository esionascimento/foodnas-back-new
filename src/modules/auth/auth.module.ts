import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsuariosModule } from '../usuarios/usuarios.module';

@Module({
  imports: [PassportModule, UsuariosModule],
  providers: [AuthService, AuthResolver, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
