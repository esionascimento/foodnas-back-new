import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsuariosService } from './usuarios.service';
import {
  CreateUsuariosInput,
  CreateUsuariosInputInterno,
  CreateUsuariosResponse,
} from './dto/inputs/create-usuarios.input';
import { Usuarios } from '@/entities/usuarios.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Resolver(() => Usuarios)
export class UsuariosResolver {
  constructor(private usuariosService: UsuariosService) {}

  @Mutation(() => CreateUsuariosResponse)
  async createUsuarios(
    @Args('input') input: CreateUsuariosInput,
  ): Promise<CreateUsuariosResponse> {
    const aux = await this.usuariosService.create(input);
    return aux;
  }

  @Mutation(() => CreateUsuariosResponse)
  @UseGuards(JwtAuthGuard)
  async createUsuariosInterno(
    @Args('input') input: CreateUsuariosInputInterno,
    @Context() context,
  ): Promise<CreateUsuariosResponse> {
    const aux = await this.usuariosService.createInterno(
      input,
      context.req.user,
    );
    return aux;
  }

  @Query(() => [Usuarios])
  @UseGuards(JwtAuthGuard)
  findAll(@Context() context) {
    return this.usuariosService.findAll(context.req.user);
  }

  @Query(() => Usuarios, { name: 'nome' })
  findOne(@Args('nome', { type: () => String }) nome: string) {
    return this.usuariosService.findOne({ where: { nome } });
  }
}
