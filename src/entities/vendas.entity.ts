import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Usuario } from './usuarios.entity';
import { VendaItem } from './itens_venda.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class Venda extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('datetime')
  data_venda: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  valor_total: number;

  @Column({ type: 'enum', enum: ['PENDENTE', 'CONCLUIDA', 'CANCELADA'] })
  status: string;

  @OneToMany((type) => VendaItem, (vendaItem) => vendaItem.venda)
  itens: VendaItem[];

  @ManyToOne((type) => Usuario, (usuario) => usuario.vendas)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;
}
