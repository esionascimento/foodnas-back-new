import { Usuarios } from '@/entities/usuarios.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginResponse {
  @Field()
  accessToken: string;

  @Field()
  usuario: Usuarios;
}
