import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Usuario } from './usuarios.entity';
import { VendaItem } from './itens_venda.entity';
import { BaseEntity } from './base.entity';
import { EStatus, TStatusRoleType } from './enum';
import { MeioPagamentos } from './meios_pagamentos.entity';

@Entity()
export class Venda extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('datetime', { name: 'data_venda' })
  dataVenda: Date;

  @Column('decimal', { name: 'valor_total', precision: 10, scale: 2 })
  valorTotal: number;

  @Column({ type: 'enum', enum: EStatus })
  status: TStatusRoleType;

  @OneToMany((type) => VendaItem, (vendaItem) => vendaItem.venda)
  itens: VendaItem[];

  @ManyToOne((type) => Usuario, (usuario) => usuario.vendas)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @ManyToMany(() => MeioPagamentos, (meioPagamento) => meioPagamento.vendas)
  @JoinTable({
    name: 'vendas_meios_pagamento',
    joinColumn: {
      name: 'id_venda',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_meio_pagamento',
      referencedColumnName: 'id',
    },
  })
  meiosPagamento: MeioPagamentos[];
}
