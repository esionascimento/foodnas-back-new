import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetFornecedorArgs } from './dto/get-fornecedor-args';
import { FornecedoresService } from './fornecedores.service';
import { CreateOneFornecedoresInput } from './dto/inputs/create-fornecedores.input';
import { Fornecedores } from '@/entities/fornecedores.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class FornecedoresResolver {
  constructor(private fornecedoresService: FornecedoresService) {}

  @Mutation(() => Fornecedores, { name: 'CreateFornecedor' })
  @UseGuards(JwtAuthGuard)
  async CreateFornecedor(
    @Args('input') input: CreateOneFornecedoresInput,
    @Context() context,
  ): Promise<Fornecedores> {
    return this.fornecedoresService.create(input, context.req.user);
  }
}
