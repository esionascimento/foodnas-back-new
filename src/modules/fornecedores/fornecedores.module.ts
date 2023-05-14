import { Module } from '@nestjs/common';
import { FornecedoresResolver } from './fornecedores.resolver';
import { FornecedoresService } from './fornecedores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fornecedores } from '@/entities/fornecedores.entity';
import { Roles } from '@/entities/roles.entity';
import { Usuarios } from '@/entities/usuarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fornecedores, Roles, Usuarios])],
  providers: [FornecedoresService, FornecedoresResolver],
  exports: [FornecedoresService],
})
export class FornecedoresModule {}
