import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetFornecedorArgs } from './dto/get-fornecedor-args';
import { FornecedoresService } from './fornecedores.service';
import { CreateOneFornecedoresInput } from './dto/inputs/create-fornecedores.input';
import { Fornecedores } from '@/entities/fornecedores.entity';

@Resolver()
export class FornecedoresResolver {
  constructor(private fornecedoresService: FornecedoresService) {}

  @Mutation(() => Fornecedores, { name: 'CreateFornecedor' })
  async CreateFornecedor(
    @Args('input') input: CreateOneFornecedoresInput,
  ): Promise<Fornecedores> {
    return this.fornecedoresService.create(input);
  }
}
