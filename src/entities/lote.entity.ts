import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Produto } from './produtos.entity';
import { BaseEntity } from './base.entity';
import { Usuario } from './usuarios.entity';
import { Preco } from './precos.entity';
import { Estoque } from './estoque.entity';
import { ItensCompra } from './itens_compra.entity';

@Entity()
export class Lote extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'numero_lote', length: 20 })
  numeroLote: string;

  @Column('datetime', { name: 'data_validade' })
  dataValidade: Date;

  @Column('integer')
  quantidade: number;

  @ManyToOne(() => Produto, (produto) => produto.lotes)
  @JoinColumn({ name: 'id_produto' })
  produto: Produto;

  @ManyToOne(() => Usuario, (user) => user.lotes)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @OneToMany(() => Preco, (preco) => preco.lote)
  precos: Preco[];

  @OneToMany(() => Estoque, (estoque) => estoque.lote)
  estoques: Estoque[];

  @OneToMany((type) => ItensCompra, (itensCompra) => itensCompra.lote)
  itensCompra: ItensCompra[];
}
