import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UsuariosService } from "./usuarios.service";
import { CreateUsuariosInput } from "./dto/inputs/create-usuarios.input";
import { Usuarios } from "@/entities/usuarios.entity";

@Resolver(() => Usuarios)
export class UsuariosResolver {
  constructor(
    private usuariosService: UsuariosService
  ) {}

  @Mutation(() => String)
  async createUsuarios(@Args('input') input: CreateUsuariosInput): Promise<CreateUsuariosInput> {
      const aux = this.usuariosService.create(input);
      console.log("aux: ", aux);
      return aux
  }

  @Query(() => Usuarios, { name: 'nome' })
  findAll() {
    return this.usuariosService.findAll();
  }

  @Query(() => Usuarios, { name: 'nome' })
  findOne(@Args('nome', { type: () => String }) nome: string) {
    return this.usuariosService.findOne(nome)
  }
}