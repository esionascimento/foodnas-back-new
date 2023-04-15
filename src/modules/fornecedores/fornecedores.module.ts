import { Module } from '@nestjs/common';
import { FornecedoresResolver } from './fornecedores.resolver';
import { FornecedoresService } from './fornecedores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fornecedores } from '@/entities/fornecedores.entity';

@Module({
  controllers: [],
  imports: [TypeOrmModule.forFeature([Fornecedores])],
  providers: [FornecedoresService, FornecedoresResolver],
  exports: [FornecedoresService],
})
export class FornecedoresModule {}
