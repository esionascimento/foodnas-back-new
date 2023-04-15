import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Venda } from './vendas.entity';
import { MeiosPagamento } from './meios_pagamentos.entity';

@Entity()
export class VendasMeioPagamento {
  // @Column({ name: 'id_venda', type: 'int', primary: true })
  // idVenda: number;

  // @Column({ name: 'id_meio_pagamento', type: 'int', primary: true })
  // idMeioPagamento: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor: number;

  @PrimaryColumn()
  public vendaId: string;

  @ManyToOne(() => Venda, (venda) => venda.meiosPagamento)
  @JoinColumn({ name: 'id_venda' })
  venda: Venda;

  @PrimaryColumn()
  public meioPagamentoId: string;

  @ManyToOne(() => MeiosPagamento, (meioPagamento) => meioPagamento.vendas)
  @JoinColumn({ name: 'id_meios_pagamento' })
  meiosPagamento: MeiosPagamento;
}
