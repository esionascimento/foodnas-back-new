import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Permissoes } from './permissoes.entity';
import { BaseEntity } from './base.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Roles extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  nome: string;

  @Field()
  @Column()
  descricao: string;

  @ManyToMany(() => Permissoes)
  @JoinTable({
    name: 'permissoes_roles',
    joinColumns: [{ name: 'id_role' }],
    inverseJoinColumns: [{ name: 'id_permissao' }],
  })
  permissoes: Permissoes[];
}
