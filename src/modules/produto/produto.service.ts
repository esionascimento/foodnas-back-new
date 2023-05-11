import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateOneProdutoInput } from './dto/inputs/create-produto.input';
import { TPayload } from '@/types';
import { Produtos } from '@/entities/produtos.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produtos)
    private readonly permissoesRepository: Repository<Produtos>,
  ) {}

  async create(
    input: CreateOneProdutoInput,
    user: TPayload,
  ): Promise<Produtos> {
    const existPermissao = await this.findOne({ where: { nome: input.nome } });

    if (existPermissao) throw new BadRequestException('Permissão já existe!');
    return;
    // const newPermissao = new Produtos();

    // const resProduto = await this.permissoesRepository.save(
    //   newPermissao,
    // );

    // if (!resProduto) {
    //   throw new BadRequestException('Falha criar permissão');
    // }
    // return resProduto;
  }

  async findOne(options: FindOneOptions<Produtos>) {
    return this.permissoesRepository.findOne(options);
  }
}
