import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from './usuario.entity';
import { ItensCompra } from './itens_compra.entity';

@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  dataCompra: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valorTotal: number;

  @OneToMany(type => ItensCompra, itensCompra => itensCompra.compra)
  itensCompra: ItensCompra[];

  @Column()
  id_usuario: number;

  @ManyToOne(() => Usuario)
  usuario: Usuario;
}
