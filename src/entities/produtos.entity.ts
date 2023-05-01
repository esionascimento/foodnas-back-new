import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Usuarios } from './usuarios.entity';
import { Fornecedores } from './fornecedores.entity';
import { Lotes } from './lote.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class Produtos extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  nome: string;

  @Column({ type: 'text', nullable: true })
  descricao: string;

  @Column('varchar', { length: 20 })
  unidade: string;

  @ManyToOne(() => Fornecedores, (fornecedores) => fornecedores.produtos)
  fornecedores: Fornecedores;

  @OneToMany(() => Lotes, (lote) => lote.produto)
  lotes: Lotes[];

  @ManyToOne(() => Usuarios, (usuario) => usuario.produtos)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuarios;

  // @OneToMany(() => ItemVenda, itemVenda => itemVenda.produto)
  // itensVenda: VendaItem[];

  // @OneToMany(() => ItemCompra, itemCompra => itemCompra.produto)
  // itensCompra: ItemCompra[];
}
