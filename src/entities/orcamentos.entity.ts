import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class Orcamento  extends BaseEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'enum', enum: ['PENDENTE', 'CONCLUIDA', 'CANCELADA']})
  status: string;
  
  @Column('datetime', { name: 'data_orcamento' })
  dataOrcamento: Date;
  
  @Column('decimal', { name: 'valor_total', precision: 10, scale: 2 })
  valorTotal: string;

  @ManyToOne(() => Usuario, { eager: true })
  usuario: Usuario;
}
