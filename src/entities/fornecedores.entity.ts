import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Usuario } from './usuario.entity';
import { Produto } from './produto.entity';

@Entity()
export class Fornecedor  extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nome: string;

  @Column()
  endereco: string;

  @ManyToOne(() => Usuario, usuario => usuario.fornecedores)
  usuario: Usuario;

  @OneToMany(() => Produto, produto => produto.fornecedores)
  produtos: Produto[];
}
