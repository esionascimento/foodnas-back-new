import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Produtos } from './produtos.entity';

@Entity()
export class Tipos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Produtos, (produto) => produto.tipo)
  produtos: Produtos[];
}
