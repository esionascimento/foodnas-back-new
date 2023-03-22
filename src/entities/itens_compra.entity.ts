import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Compra } from './compras.entity';
import { Lote } from './lote.entity';
import { Usuario } from './usuario.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class ItensCompra extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Compra, (compra) => compra.itensCompra)
  compra: Compra;

  @ManyToOne((type) => Lote, (lote) => lote.itensCompra)
  lote: Lote;

  @Column()
  quantidade: number;

  @Column()
  valor_unitario: number;

  @ManyToOne((type) => Usuario, (usuario) => usuario.itensCompra)
  usuario: Usuario;
}
