import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Usuarios } from './usuarios.entity';
import { Fornecedores } from './fornecedores.entity';
import { Lotes } from './lote.entity';
import { BaseEntity } from './base.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Caracteristicas } from './caracteristicas.entity';
import { Categorias } from './categorias.entity';

@ObjectType()
@Entity()
export class Produtos extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field()
  @Column('varchar', { length: 50 })
  nome: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  descricao: string;

  @Field()
  @Column('varchar', { length: 20 })
  unidade: string;

  @ManyToOne(() => Categorias, (tipos) => tipos.produtos)
  tipo: Categorias;

  @ManyToOne(() => Fornecedores, (fornecedores) => fornecedores.produtos)
  fornecedores: Fornecedores;

  @OneToMany(() => Lotes, (lote) => lote.produto)
  lotes: Lotes[];

  @ManyToOne(() => Usuarios, (usuario) => usuario.produtos)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuarios;

  @OneToMany(() => Caracteristicas, (caracteristica) => caracteristica.produto)
  caracteristicas: Caracteristicas[];

  // @OneToMany(() => ItemVenda, itemVenda => itemVenda.produto)
  // itensVenda: VendaItem[];

  // @OneToMany(() => ItemCompra, itemCompra => itemCompra.produto)
  // itensCompra: ItemCompra[];
}
