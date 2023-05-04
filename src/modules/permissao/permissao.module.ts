import { Module } from '@nestjs/common';
import { PermissaoResolver } from './permissao.resolver';
import { PermissaoService } from './permissao.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permissoes } from '@/entities/permissoes.entity';

@Module({
  controllers: [],
  imports: [TypeOrmModule.forFeature([Permissoes])],
  providers: [PermissaoService, PermissaoResolver],
  exports: [PermissaoService],
})
export class PermissaoModule {}
