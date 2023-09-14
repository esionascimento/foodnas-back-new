import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from './base.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Usuarios } from './usuarios.entity';

@ObjectType()
@Entity()
export class Lojas extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field()
  @Column('varchar', { unique: true, length: 50 })
  nome: string;

  @Field()
  @Column('varchar', { length: 100 })
  endereco: string;

  @Field()
  @Column({ unique: true, length: 14 })
  cnpj: string;

  @Field()
  @Column()
  celular: string;

  @Field()
  @Column()
  telefone: string;

  // @Field(() => Int)
  // @Column({ name: 'id_usuario' })
  // usuarioId: number;

  // @Field(() => Usuarios)
  // @ManyToOne(() => Usuarios, (usuario) => usuario.id, {
  //   nullable: false,
  // })
  // @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
  // usuario: Usuarios;

  @OneToMany(() => Usuarios, (lote) => lote.loja)
  usuario: Usuarios[];
}
