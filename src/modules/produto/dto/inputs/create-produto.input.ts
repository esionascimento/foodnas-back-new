import { Field, InputType } from '@nestjs/graphql';

@InputType()
class CreateProductTipo {
  @Field()
  nome: string;
}

@InputType()
class CreateProductCaracteristica {
  @Field()
  nome: string;

  @Field()
  valor: string;
}

@InputType()
export class CreateOneProdutoInput {
  @Field()
  nome: string;

  @Field()
  descricao: string;

  @Field()
  unidade: string;

  @Field(() => CreateProductTipo)
  tipo: CreateProductTipo;

  @Field(() => CreateProductCaracteristica)
  caracteristica: CreateProductCaracteristica;
}

@InputType()
class CaracteristicaInput {
  @Field()
  nome: string;

  @Field()
  valor: string;
}

@InputType()
export class ProdutoInput {
  @Field()
  nome: string;

  @Field()
  descricao: string;

  @Field()
  unidade: string;

  @Field()
  tipoId: number;

  @Field(() => [CaracteristicaInput])
  caracteristicas: CaracteristicaInput[];
}
