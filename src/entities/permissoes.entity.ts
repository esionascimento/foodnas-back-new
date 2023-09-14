import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Permissoes extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field()
  @Column()
  nome: string;

  @Field()
  @Column()
  descricao: string;

  // @ManyToMany(() => Usuarios, (user) => user.permissoes)
  // usuarios: Usuarios[];
}
