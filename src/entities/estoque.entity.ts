import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Usuario } from './usuario.entity';
import { Lote } from './lote.entity';

@Entity()
export class Estoque extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Lote)
  lote: Lote;

  @Column()
  quantidade: number;

  @ManyToOne(() => Usuario)
  usuario: Usuario;
}
