import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Usuario } from './usuarios.entity';
import { Fornecedores } from './fornecedores.entity';
import { Lote } from './lote.entity';
import { VendaItem } from './itens_venda.entity';

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

  @ManyToOne(() => Fornecedores, fornecedores => fornecedores.produtos)
  fornecedores: Fornecedores;
  
  @OneToMany(() => Lote, lote => lote.produto)
  lotes: Lote[];

  @ManyToOne(() => Usuario, usuario => usuario.produtos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  // @OneToMany(() => ItemVenda, itemVenda => itemVenda.produto)
  // itensVenda: VendaItem[];

  // @OneToMany(() => ItemCompra, itemCompra => itemCompra.produto)
  // itensCompra: ItemCompra[];
}
