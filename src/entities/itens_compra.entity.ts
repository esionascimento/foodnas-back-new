import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Compras } from './compras.entity';
import { Lote } from './lote.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class ItensCompra extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer')
  quantidade: number;

  @Column('decimal', { name: 'valor_unitario', precision: 10, scale: 2 })
  valorUnitario: number;

  @ManyToOne((type) => Compras, (compra) => compra.itensCompra)
  @JoinColumn({ name: 'id_compra' })
  compra: Compras;

  @ManyToOne((type) => Lote, (lote) => lote.itensCompra)
  @JoinColumn({ name: 'id_lote' })
  lote: Lote;
}
