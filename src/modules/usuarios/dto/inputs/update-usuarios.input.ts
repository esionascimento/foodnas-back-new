import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';

@InputType()
export class UpdateUsuariosInputInterno {
  @Field()
  @IsNotEmpty({ message: 'O ID não pode estar vazio' })
  @IsNumber()
  id: number;

  @Field()
  @MinLength(3, { message: 'Nome minimo 3 letras' })
  @MaxLength(255)
  nome: string;

  @Field()
  @MaxLength(255)
  email: string;

  @Field(() => [String])
  roles: string[];
}
