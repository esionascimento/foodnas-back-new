import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateOneRolesInput {
  @Field()
  nome: string;

  @Field()
  descricao: string;

  @Field(() => [String])
  permissoes: string[];
}
