import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateOnePermissaoInput {
  @Field()
  nome: string;

  @Field()
  descricao: string;
}
