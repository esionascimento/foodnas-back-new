import { Module } from '@nestjs/common';
import { RolesResolver } from './roles.resolver';
import { RolesService } from './roles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from '@/entities/roles.entity';
import { Permissoes } from '@/entities/permissoes.entity';

@Module({
  controllers: [],
  imports: [TypeOrmModule.forFeature([Roles, Permissoes])],
  providers: [RolesService, RolesResolver],
  exports: [RolesService],
})
export class RolesModule {}
