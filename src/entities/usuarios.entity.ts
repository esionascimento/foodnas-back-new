import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from './produtos.entity';
import { Fornecedores } from './fornecedores.entity';
import { Lote } from './lote.entity';
import { Preco } from './precos.entity';
import { Estoque } from './estoque.entity';
import { Venda } from './vendas.entity';
import { Compra } from './compras.entity';
import { Orcamento } from './orcamentos.entity';
import { BaseEntity } from './base.entity';
import { ItensCompra } from './itens_compra.entity';

@Entity()
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
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

  @OneToMany(() => Compra, (compra) => compra.usuario)
  compras: Compra[];

  @OneToMany(() => Orcamento, (orcamento) => orcamento.usuario)
  orcamentos: Orcamento[];

  @OneToMany(type => ItensCompra, itensCompra => itensCompra.usuario)
  itensCompra: ItensCompra[];
}
