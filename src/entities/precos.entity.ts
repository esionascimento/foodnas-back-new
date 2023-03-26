import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Produto } from './produtos.entity';
import { Fornecedores } from './fornecedores.entity';
import { Lote } from './lote.entity';
import { Usuario } from './usuarios.entity';

@Entity()
export class Preco extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data_semana: Date;

  @Column()
  preco_compra: number;

  @Column()
  preco_venda: number;

  @ManyToOne(() => Produto)
  @JoinColumn({ name: 'id_produto' })
  produto: Produto;

  @ManyToOne(() => Fornecedores)
  @JoinColumn({ name: 'id_fornecedor' })
  fornecedor: Fornecedores;

  @ManyToOne(() => Lote)
  @JoinColumn({ name: 'id_lote' })
  lote: Lote;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;
}
