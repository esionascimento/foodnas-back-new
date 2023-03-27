import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Orcamento } from './orcamentos.entity';
import { Produto } from './produtos.entity';
import { BaseEntity } from './base.entity';

@Entity('itens_orcamento')
export class ItensOrcamento extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantidade: number;

  @Column('decimal', { name: 'valor_unitario', precision: 10, scale: 2 })
  valorUnitario: number;

  @ManyToOne(() => Orcamento)
  @JoinColumn({ name: 'id_orcamento' })
  orcamento: Orcamento;

  @ManyToOne(() => Produto)
  @JoinColumn({ name: 'id_produto' })
  produto: Produto;
}
