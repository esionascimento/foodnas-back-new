import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Fornecedor } from './fornecedores.entity';
import { Lote } from './lote.entity';
import { VendaItem } from './venda-item.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ type: 'text', nullable: true })
  descricao: string;

  @Column()
  unidade: string;

  @ManyToOne(() => Usuario, usuario => usuario.produtos, { onDelete: 'CASCADE' })
  usuario: Usuario;

  @OneToMany(() => Fornecedor, fornecedor => fornecedor.produtos)
  fornecedores: Fornecedor[];

  @OneToMany(() => Lote, lote => lote.produto)
  lotes: Lote[];

  // @OneToMany(() => ItemVenda, itemVenda => itemVenda.produto)
  // itensVenda: VendaItem[];

  // @OneToMany(() => ItemCompra, itemCompra => itemCompra.produto)
  // itensCompra: ItemCompra[];
}
