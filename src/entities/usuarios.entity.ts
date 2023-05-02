import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Produtos } from './produtos.entity';
import { Fornecedores } from './fornecedores.entity';
import { Lotes } from './lote.entity';
import { Preco } from './precos.entity';
import { Estoque } from './estoque.entity';
import { Venda } from './vendas.entity';
import { Compras } from './compras.entity';
import { Orcamento } from './orcamentos.entity';
import { BaseEntity } from './base.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { EPermission, TPermissionType } from './enum';
import { Lojas } from './lojas.entity';
import { Permissoes } from './permissoes.entity';

@ObjectType()
@Entity()
export class Usuarios extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar', { length: 50 })
  nome: string;

  @Field()
  @Column('varchar', { length: 255 })
  email: string;

  @Column('varchar', { length: 255 })
  senha: string;

  @Column({ type: 'enum', enum: EPermission })
  roles: TPermissionType;

  @ManyToOne(() => Lojas, (loja) => loja.usuario)
  @JoinColumn({ name: 'id_loja', referencedColumnName: 'id' })
  loja: Lojas;

  @ManyToMany(() => Permissoes, (permissoes) => permissoes.usuarios)
  permissoes: Permissoes[];

  @OneToMany(() => Produtos, (produto) => produto.usuario)
  produtos: Produtos[];

  @OneToMany(() => Fornecedores, (fornecedor) => fornecedor.usuario)
  fornecedores: Fornecedores[];

  @OneToMany(() => Lotes, (lote) => lote.usuario)
  lotes: Lotes[];

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
