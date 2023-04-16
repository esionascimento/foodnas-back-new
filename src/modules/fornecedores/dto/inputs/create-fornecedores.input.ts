import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateOneFornecedoresInput {
  @Field()
  nome: string;
  
  @Field()
  endereco: string;
}
