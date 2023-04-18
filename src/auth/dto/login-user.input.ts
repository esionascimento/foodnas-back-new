import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginUsuarioInput {
  @Field()
  nome: string;

  @Field()
  senha: string;
}
