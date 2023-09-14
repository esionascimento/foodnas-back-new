import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Usuarios } from './usuarios.entity';
import { Lotes } from './lote.entity';

@Entity()
export class MovimentacoesEstoque extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('integer')
  quantidade: string;

  @Column('enum', { enum: ['entrada', 'saida'] })
  tipo: 'entrada' | 'saida';

  @Column('datetime', { name: 'data_movimentacao' })
  dataMovimentacao: Date;

  @ManyToOne(() => Lotes)
  @JoinColumn({ name: 'id_lote' })
  lote: Lotes;

  @ManyToOne(() => Usuarios, (usuario) => usuario.fornecedores)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuarios;
}
