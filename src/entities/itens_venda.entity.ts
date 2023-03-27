import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Venda } from './vendas.entity';
import { Lote } from './lote.entity';

@Entity()
export class VendaItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  quantidade: number;
  
  @Column({ name: 'valor_unitario', type: 'decimal', precision: 10, scale: 2 })
  valorUnitario: number;
  
  @ManyToOne(() => Venda, (venda) => venda.itens)
  @JoinColumn({ name: 'id_venda' })
  venda: Venda;
  
  @ManyToOne(() => Lote)
  @JoinColumn({ name: 'id_lote' })
  lote: Lote;
}
