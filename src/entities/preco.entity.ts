import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Produto } from './produto.entity';
import { Fornecedor } from './fornecedores.entity';
import { Lote } from './lote.entity';
import { Usuario } from './usuario.entity';

@Entity()
export class Preco extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Produto)
  produto: Produto;

  @Column()
  data_semana: Date;

  @Column()
  preco_compra: number;

  @Column()
  preco_venda: number;

  @ManyToOne(() => Fornecedor)
  fornecedor: Fornecedor;

  @ManyToOne(() => Lote)
  lote: Lote;

  @ManyToOne(() => Usuario)
  usuario: Usuario;
}
