import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Usuarios } from './usuarios.entity';
import { ItensCompra } from './itens_compra.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class Compras extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('datetime', { name: 'data_compra' })
  dataCompra: Date;

  @Column('decimal', { name: 'valor_total', precision: 10, scale: 2 })
  valorTotal: number;

  @Column('enum', { enum: ['PENDENTE', 'CONCLUIDA', 'CANCELADA'] })
  status: string;

  @OneToMany((type) => ItensCompra, (itensCompra) => itensCompra.compra)
  itensCompra: ItensCompra[];

  @ManyToOne(() => Usuarios)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuarios;
}
