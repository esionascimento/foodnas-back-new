import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginUsuarioInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
