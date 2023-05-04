import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PermissaoService } from './permissao.service';
import { CreateOnePermissaoInput } from './dto/inputs/create-permissao.input';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Permissoes } from '@/entities/permissoes.entity';

@Resolver()
export class PermissaoResolver {
  constructor(private permissoesService: PermissaoService) {}

  @Mutation(() => Permissoes)
  @UseGuards(JwtAuthGuard)
  async CreatePermissao(
    @Args('input') input: CreateOnePermissaoInput,
    @Context() context,
  ): Promise<Permissoes> {
    return this.permissoesService.create(input, context.req.user);
  }
}
