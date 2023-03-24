import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Usuario } from './usuario.entity';
import { VendaItem } from './venda-item.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class Venda extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('datetime')
  data_venda: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  valor_total: number;

  @Column({type: 'enum', enum: ['PENDENTE', 'CONCLUIDA', 'CANCELADA']})
  status: string;

  @ManyToOne((type) => Usuario, (usuario) => usuario.vendas)
  usuario: Usuario;

  @OneToMany((type) => VendaItem, (vendaItem) => vendaItem.venda)
  itens: VendaItem[];
}
