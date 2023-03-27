import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from './usuarios.entity';
import { BaseEntity } from './base.entity';
import { EStatus, TStatusRoleType } from './enum';

@Entity()
export class Orcamento extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: EStatus })
  status: TStatusRoleType;

  @Column('datetime', { name: 'data_orcamento' })
  dataOrcamento: Date;

  @Column('decimal', { name: 'valor_total', precision: 10, scale: 2 })
  valorTotal: string;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;
}
