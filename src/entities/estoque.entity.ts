import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Usuarios } from './usuarios.entity';
import { Lotes } from './lote.entity';

@Entity()
export class Estoque extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('integer')
  quantidade: number;

  @ManyToOne(() => Lotes)
  @JoinColumn({ name: 'id_lote' })
  lote: Lotes;

  @ManyToOne(() => Usuarios)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuarios;
}
