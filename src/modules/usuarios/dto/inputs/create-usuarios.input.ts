import { Field, InputType } from '@nestjs/graphql';
import { MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateUsuariosInput {
  @Field()
  @MinLength(3, { message: "Nome minimo 3 letras"})
  @MaxLength(255)
  nome: string;
  
  @Field()
  @MaxLength(255)
  email: string;

  @Field()
  @MinLength(8)
  @MaxLength(255)
  senha: string;
}
