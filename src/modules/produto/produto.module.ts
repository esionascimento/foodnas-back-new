import { Module } from '@nestjs/common';
import { ProdutoResolver } from './produto.resolver';
import { ProdutoService } from './produto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtos } from '@/entities/produtos.entity';
import { Roles } from '@/entities/roles.entity';
import { Usuarios } from '@/entities/usuarios.entity';
import { Caracteristicas } from '@/entities/caracteristicas.entity';
import { Tipos } from '@/entities/tipos.entity';

@Module({
  controllers: [],
  imports: [
    TypeOrmModule.forFeature([
      Produtos,
      Roles,
      Usuarios,
      Caracteristicas,
      Tipos,
    ]),
  ],
  providers: [ProdutoService, ProdutoResolver],
  exports: [ProdutoService],
})
export class ProdutoModule {}
