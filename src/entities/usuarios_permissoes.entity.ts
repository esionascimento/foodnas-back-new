import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuarios } from './usuarios.entity';
import { Permissoes } from './permissoes.entity';

@Entity()
export class UsuariosPermissoes {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => Usuarios, (user) => user.permissoes, { onDelete: 'CASCADE' })
  // usuarios: Usuarios;

  // @ManyToOne(() => Permissoes, (permission) => permission.usuarios, {
  //   onDelete: 'CASCADE',
  // })
  // permissoes: Permissoes;
}
