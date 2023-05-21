import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProdutoService } from './produto.service';
import { ProdutoInput } from './dto/inputs/create-produto.input';
import { Produtos } from '@/entities/produtos.entity';

@Resolver()
export class ProdutoResolver {
  constructor(private produtoService: ProdutoService) {}

  @Mutation(() => Produtos)
  async CreateProduto(
    @Args('input') input: ProdutoInput,
    @Context() context,
  ): Promise<Produtos> {
    return this.produtoService.create(input, context.req.user);
  }
}
