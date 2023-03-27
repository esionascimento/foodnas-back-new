import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Usuario } from './usuarios.entity';
import { Produto } from './produtos.entity';

@Entity()
export class Fornecedores extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true, length: 50 })
  nome: string;

  @Column('varchar', { length: 100 })
  endereco: string;

  @OneToMany(() => Produto, (produto) => produto.fornecedores)
  @JoinColumn({ name: 'id_usuario' })
  produtos: Produto[];

  @ManyToOne(() => Usuario, (usuario) => usuario.fornecedores)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;
}
