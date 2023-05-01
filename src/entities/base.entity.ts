import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @CreateDateColumn()
  criadoEm: Date;

  @UpdateDateColumn({ nullable: true })
  atualizadoEm: Date;
}
