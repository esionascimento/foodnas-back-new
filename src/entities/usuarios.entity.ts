import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from './produtos.entity';
import { Fornecedores } from './fornecedores.entity';
import { Lote } from './lote.entity';
import { Preco } from './precos.entity';
import { Estoque } from './estoque.entity';
import { Venda } from './vendas.entity';
import { Compras } from './compras.entity';
import { Orcamento } from './orcamentos.entity';
import { BaseEntity } from './base.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Usuarios extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar', { length: 50 })
  nome: string;

  @Column('varchar', { length: 255 })
  email: string;

  @Field()
  @Column('varchar', { length: 255 })
  senha: string;

  @OneToMany(() => Produto, (produto) => produto.usuario)
  produtos: Produto[];

  @OneToMany(() => Fornecedores, (fornecedor) => fornecedor.usuario)
  fornecedores: Fornecedores[];

  @OneToMany(() => Lote, (lote) => lote.usuario)
  lotes: Lote[];

  @OneToMany(() => Preco, (preco) => preco.usuario)
  precos: Preco[];

  @OneToMany(() => Estoque, (estoque) => estoque.usuario)
  estoques: Estoque[];

  @OneToMany(() => Venda, (venda) => venda.usuario)
  vendas: Venda[];

  @OneToMany(() => Compras, (compra) => compra.usuario)
  compras: Compras[];

  @OneToMany(() => Orcamento, (orcamento) => orcamento.usuario)
  orcamentos: Orcamento[];
}
