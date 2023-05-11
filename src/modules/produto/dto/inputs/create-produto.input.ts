import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateOneProdutoInput {
  @Field()
  nome: string;

  @Field()
  descricao: string;

  @Field()
  unidade: string;
}
