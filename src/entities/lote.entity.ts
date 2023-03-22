import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Produto } from './produto.entity';
import { BaseEntity } from './base.entity';
import { Usuario } from './usuario.entity';
import { Preco } from './preco.entity';
import { Estoque } from './estoque.entity';
import { ItensCompra } from './itens_compra.entity';

@Entity()
export class Lote extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numeroLote: string;

  @Column()
  dataValidade: Date;

  @Column()
  quantidade: number;

  @ManyToOne(() => Produto, produto => produto.lotes)
  produto: Produto;

  @ManyToOne(() => Usuario, user => user.lotes)
  usuario: Usuario;

  @OneToMany(() => Preco, preco => preco.lote)
  precos: Preco[];

  @OneToMany(() => Estoque, estoque => estoque.lote)
  estoques: Estoque[];

  @OneToMany(type => ItensCompra, itensCompra => itensCompra.lote)
  itensCompra: ItensCompra[];
}
