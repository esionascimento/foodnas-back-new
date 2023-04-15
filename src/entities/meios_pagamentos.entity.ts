import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Venda } from './vendas.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class MeiosPagamento extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  descricao: string;

  @ManyToMany(() => Venda, (venda) => venda.meiosPagamento)
  vendas: Venda[];
}
