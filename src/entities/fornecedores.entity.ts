import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Usuarios } from './usuarios.entity';
import { Produtos } from './produtos.entity';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Fornecedores extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar', { unique: true, length: 50 })
  nome: string;

  @Field()
  @Column('varchar', { length: 100 })
  endereco: string;

  @OneToMany(() => Produtos, (produto) => produto.fornecedores)
  @JoinColumn({ name: 'id_usuario' })
  produtos: Produtos[];

  @Field(() => Int)
  @Column({ name: 'id_usuario' })
  usuarioId: number;

  @ManyToOne(() => Usuarios, (usuario) => usuario.id, {
    nullable: false,
  })
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
  usuario: Usuarios;
}
