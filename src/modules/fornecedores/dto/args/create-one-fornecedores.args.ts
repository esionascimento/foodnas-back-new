import { ArgsType, Field } from '@nestjs/graphql';
import { CreateOneFornecedoresInput } from '../inputs/create-fornecedores.input';

@ArgsType()
export class CreateOneFornecedoresArgs {
  @Field()
  data: CreateOneFornecedoresInput;
}
