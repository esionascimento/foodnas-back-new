import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fornecedores } from '@/entities/fornecedores.entity';
import { Repository } from 'typeorm';
import { CreateOneFornecedoresInput } from './dto/inputs/create-fornecedores.input';
import { TPayload } from '@/types';

@Injectable()
export class FornecedoresService {
  constructor(
    @InjectRepository(Fornecedores)
    private readonly fornecedoresRepository: Repository<Fornecedores>,
  ) {}

  async create(
    input: CreateOneFornecedoresInput,
    user: TPayload,
  ): Promise<Fornecedores> {
    const neww = new Fornecedores();
    neww.atualizadoEm = null;
    neww.criadoEm = new Date();
    neww.endereco = input?.endereco;
    neww.nome = input?.nome;
    neww.usuarioId = user.userId;

    const aux = await this.fornecedoresRepository.save(neww);
    if (!aux) {
      throw new BadRequestException('Falha na criação');
    }
    return aux;
  }
}
