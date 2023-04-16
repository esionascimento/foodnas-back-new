import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fornecedores } from '@/entities/fornecedores.entity';
import { Repository } from 'typeorm';
import { CreateOneFornecedoresInput } from './dto/inputs/create-fornecedores.input';

@Injectable()
export class FornecedoresService {
  constructor(
    @InjectRepository(Fornecedores)
    private readonly fornecedoresRepository: Repository<Fornecedores>,
  ) {}

  async create(input: CreateOneFornecedoresInput): Promise<Fornecedores> {
    const user = this.fornecedoresRepository.create(input);
    const aux = await this.fornecedoresRepository.save(user);
    if (!aux) {
      throw new Error('Falha na criação');
    }
    return aux;
  }
}
