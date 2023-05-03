import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Permissoes } from './permissoes.entity';
import { BaseEntity } from './base.entity';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Roles extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

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
