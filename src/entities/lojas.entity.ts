import { Field, ID } from '@nestjs/graphql';
import { BaseEntity } from './base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuarios } from './usuarios.entity';

@Entity()
export class Lojas extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar', { unique: true, length: 50 })
  nome: string;

  @Field()
  @Column('varchar', { length: 100 })
  endereco: string;

  @ManyToOne(() => Usuarios, (usuario) => usuario.loja, {
    nullable: false,
  })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuarios;

  // @OneToMany(() => Usuarios, (lote) => lote.loja)
  // usuario: Usuarios[];
}
