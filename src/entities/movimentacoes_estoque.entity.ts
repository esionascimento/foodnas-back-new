import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Usuario } from './usuarios.entity';
import { Lote } from './lote.entity';

@Entity()
export class MovimentacoesEstoque extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer')
  quantidade: string;

  @Column('enum', { enum: ['entrada', 'saida'] })
  tipo: 'entrada' | 'saida';

  @Column('datetime', { name: 'data_movimentacao' })
  dataMovimentacao: Date;

  @ManyToOne(() => Lote)
  @JoinColumn({ name: 'id_lote' })
  lote: Lote;

  @ManyToOne(() => Usuario, (usuario) => usuario.fornecedores)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;
}
