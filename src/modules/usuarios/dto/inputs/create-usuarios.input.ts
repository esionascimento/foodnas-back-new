import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {
  IsOptional,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

@InputType()
export class CreateUsuarioLojaInput {
  @Field()
  nome: string;

  @Field()
  endereco: string;

  // @Field({ nullable: false })
  // usuarioId: number;
}

@InputType()
export class CreateUsuariosInput {
  @Field()
  @MinLength(3, { message: 'Nome minimo 3 letras' })
  @MaxLength(255)
  nome: string;

  @Field()
  @MaxLength(255)
  email: string;

  @Field()
  @MinLength(8)
  @MaxLength(255)
  senha: string;

  @Field(() => CreateUsuarioLojaInput)
  loja: CreateUsuarioLojaInput;
}

@ObjectType()
export class CreateUsuariosResponse {
  @Field()
  nome: string;

  @Field()
  email: string;
}

@InputType()
export class CreateUsuariosInputInterno {
  @Field()
  @MinLength(3, { message: 'Nome minimo 3 letras' })
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
