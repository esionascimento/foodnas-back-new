import { Usuarios } from '@/entities/usuarios.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class CUsuarios {
  @Field()
  id: number;

  @Field()
  nome: string;
}

@ObjectType()
export class LoginResponse {
  @Field()
  accessToken: string;

  @Field(() => CUsuarios)
  usuario: CUsuarios;
}
