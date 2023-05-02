import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Produtos } from './produtos.entity';
import { Fornecedores } from './fornecedores.entity';
import { Lotes } from './lote.entity';
import { Usuarios } from './usuarios.entity';

@Entity()
export class Preco extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'data_semana' })
  dataSemana: Date;

  @Column({ name: 'preco_compra' })
  precoCompra: number;

  @Column({ name: 'preco_venda' })
  precoVenda: number;

  @ManyToOne(() => Produtos)
  @JoinColumn({ name: 'id_produto' })
  produto: Produtos;

  @ManyToOne(() => Fornecedores)
  @JoinColumn({ name: 'id_fornecedor' })
  fornecedor: Fornecedores;

  @ManyToOne(() => Lotes)
  @JoinColumn({ name: 'id_lote' })
  lote: Lotes;

  @ManyToOne(() => Usuarios)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuarios;
}
