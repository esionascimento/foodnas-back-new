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
import { Produto } from './produtos.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

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

  @OneToMany(() => Produto, (produto) => produto.fornecedores)
  @JoinColumn({ name: 'id_usuario' })
  produtos: Produto[];

  @ManyToOne(() => Usuarios, (usuario) => usuario.fornecedores)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuarios;
}
