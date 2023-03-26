import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('itens_orcamento')
export class ItensOrcamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantidade: number;

  @Column('decimal', { name: 'valor_unitario', precision: 10, scale: 2 })
  valorUnitario: number;

  
}