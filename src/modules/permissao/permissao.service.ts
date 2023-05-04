import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fornecedores } from '@/entities/fornecedores.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateOnePermissaoInput } from './dto/inputs/create-permissao.input';
import { TPayload } from '@/types';
import { Permissoes } from '@/entities/permissoes.entity';

@Injectable()
export class PermissaoService {
  constructor(
    @InjectRepository(Permissoes)
    private readonly permissoesRepository: Repository<Permissoes>,
  ) {}

  async create(
    input: CreateOnePermissaoInput,
    user: TPayload,
  ): Promise<Permissoes> {
    const existPermissao = await this.findOne({ where: { nome: input.nome } });

    if (existPermissao) throw new BadRequestException('Permissão já existe!');

    const newPermissao = new Permissoes();
    newPermissao.atualizadoEm = null;
    newPermissao.nome = input?.nome;
    newPermissao.descricao = input?.descricao;

    const responsePermissao = await this.permissoesRepository.save(
      newPermissao,
    );

    if (!responsePermissao) {
      throw new BadRequestException('Falha criar permissão');
    }
    return responsePermissao;
  }

  async findOne(options: FindOneOptions<Permissoes>) {
    return this.permissoesRepository.findOne(options);
  }
}
