import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Produtos } from './produtos.entity';
import { BaseEntity } from './base.entity';
import { Usuarios } from './usuarios.entity';
import { Preco } from './precos.entity';
import { Estoque } from './estoque.entity';
import { ItensCompra } from './itens_compra.entity';

@Entity()
export class Lotes extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'numero_lote', length: 20 })
  numeroLote: string;

  @Column('datetime', { name: 'data_validade' })
  dataValidade: Date;

  @Column('integer')
  quantidade: number;

  @ManyToOne(() => Produtos, (produto) => produto.lotes)
  @JoinColumn({ name: 'id_produto' })
  produto: Produtos;

  @ManyToOne(() => Usuarios, (user) => user.lotes)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuarios;

  @OneToMany(() => Preco, (preco) => preco.lote)
  precos: Preco[];

  @OneToMany(() => Estoque, (estoque) => estoque.lote)
  estoques: Estoque[];

  @OneToMany((type) => ItensCompra, (itensCompra) => itensCompra.lote)
  itensCompra: ItensCompra[];
}
