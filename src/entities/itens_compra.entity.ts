import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Compras } from './compras.entity';
import { Lotes } from './lote.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class ItensCompra extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('integer')
  quantidade: number;

  @Column('decimal', { name: 'valor_unitario', precision: 10, scale: 2 })
  valorUnitario: number;

  @ManyToOne((type) => Compras, (compra) => compra.itensCompra)
  @JoinColumn({ name: 'id_compra' })
  compra: Compras;

  @ManyToOne((type) => Lotes, (lote) => lote.itensCompra)
  @JoinColumn({ name: 'id_lote' })
  lote: Lotes;
}
