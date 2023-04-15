import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Usuarios } from './usuarios.entity';
import { Lote } from './lote.entity';

@Entity()
export class Estoque extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer')
  quantidade: number;

  @ManyToOne(() => Lote)
  @JoinColumn({ name: 'id_lote' })
  lote: Lote;

  @ManyToOne(() => Usuarios)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuarios;
}
