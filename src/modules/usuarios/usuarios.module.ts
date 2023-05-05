import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosResolver } from './usuarios.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from '@/entities/usuarios.entity';
import { Lojas } from '@/entities/lojas.entity';
import { Roles } from '@/entities/roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuarios, Lojas, Roles])],
  providers: [UsuariosService, UsuariosResolver],
  exports: [UsuariosService],
})
export class UsuariosModule {}
