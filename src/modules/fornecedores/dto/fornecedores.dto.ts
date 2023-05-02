import { Fornecedores } from '@/entities/fornecedores.entity';
import { Usuarios } from '@/entities/usuarios.entity';
import { Field, InputType, Int } from '@nestjs/graphql';
import {
  ClassConstructor,
  Expose,
  Transform,
  plainToInstance,
} from 'class-transformer';

export const plainToValueOptional = (value: any) => (value ? value : undefined);

export const plainToInstanceEntity = <T>(
  entity: ClassConstructor<T>,
  obj: any,
) => (obj.id ? plainToInstance(entity, { id: obj.id }) : undefined);

export class TransformFornecedoresDTO {
  // @Transform(({ value }) => plainToValueOptional(value))
  // @Expose()
  // id: number;

  @Transform(({ value }) => plainToValueOptional(value))
  @Expose()
  endereco: string;

  @Transform(({ value }) => plainToValueOptional(value))
  @Expose()
  nome: string;

  @Transform(({ value }) => plainToValueOptional(value))
  @Expose()
  usuarioId: number;

  @Transform(({ value }) => plainToInstanceEntity(Usuarios, { id: value }))
  @Expose()
  usuario: Usuarios;
}
