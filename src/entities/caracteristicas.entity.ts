import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Produtos } from './produtos.entity';

@Entity()
export class Caracteristicas {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  nome: string;

  @Column()
  valor: string;

  @ManyToOne(() => Produtos, (produto) => produto.caracteristicas)
  produto: Produtos;
}
