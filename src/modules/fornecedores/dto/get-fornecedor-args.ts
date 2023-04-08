import { ArgsType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@ArgsType()
export class GetFornecedorArgs {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  @MinLength(2)
  nome?: string;
}
