import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Usuarios } from './usuarios.entity';

@Entity()
export class Permissoes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @ManyToMany(() => Usuarios, (user) => user.permissoes)
  usuarios: Usuarios[];
}
