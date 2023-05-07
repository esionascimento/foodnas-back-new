import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateOneFornecedoresInput {
  @Field()
  nome: string;
  
  @Field()
  endereco: string;
}

@InputType()
export class UpdateOneFornecedoresInput {
  @Field()
  @IsNotEmpty({ message: 'O ID  não pode estar vazio' })
  id: number;

  @Field()
  nome: string;

  @Field()
  endereco: string;
}