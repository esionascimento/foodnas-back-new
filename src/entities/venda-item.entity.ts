import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Venda } from './vendas.entity';
import { Lote } from './lote.entity';
import { Usuario } from './usuario.entity';

@Entity()
export class VendaItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Venda, (venda) => venda.itens)
  venda: Venda;

  @ManyToOne(() => Lote)
  lote: Lote;

  @Column({ type: 'integer' })
  quantidade: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valorUnitario: number;

  @ManyToOne(() => Usuario)
  usuario: Usuario;
}
