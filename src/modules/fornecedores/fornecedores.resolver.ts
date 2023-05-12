import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetFornecedorArgs } from './dto/get-fornecedor-args';
import { FornecedoresService } from './fornecedores.service';
import {
  CreateOneFornecedoresInput,
  UpdateOneFornecedoresInput,
} from './dto/inputs/create-fornecedores.input';
import { Fornecedores } from '@/entities/fornecedores.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Resolver()
export class FornecedoresResolver {
  constructor(private fornecedoresService: FornecedoresService) {}

  @Mutation(() => Fornecedores, { name: 'CreateFornecedor' })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  async CreateFornecedor(
    @Args('input') input: CreateOneFornecedoresInput,
    @Context() context,
  ): Promise<Fornecedores> {
    return this.fornecedoresService.create(input, context.req.user);
  }

  @Mutation(() => Fornecedores)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  async UpdateFornecedor(
    @Args('input') input: UpdateOneFornecedoresInput,
    @Context() context,
  ): Promise<Fornecedores> {
    return this.fornecedoresService.update(input, context.req.user);
  }
}
