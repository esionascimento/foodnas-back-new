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

  @Column()
  data_venda: Date;

  @Column()
  valor_total: number;

  @ManyToOne((type) => Usuario, (usuario) => usuario.vendas)
  usuario: Usuario;

  @OneToMany((type) => VendaItem, (vendaItem) => vendaItem.venda)
  itens: VendaItem[];
}
