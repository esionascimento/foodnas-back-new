import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import {
  CreateOneProdutoInput,
  ProdutoInput,
} from './dto/inputs/create-produto.input';
import { TPayload } from '@/types';
import { Produtos } from '@/entities/produtos.entity';
import { Caracteristicas } from '@/entities/caracteristicas.entity';
import { Tipos } from '@/entities/tipos.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produtos)
    private readonly produtosRepository: Repository<Produtos>,
    @InjectRepository(Caracteristicas)
    private readonly caracteristicasRepository: Repository<Caracteristicas>,
    @InjectRepository(Tipos)
    private readonly tiposRepository: Repository<Tipos>,
  ) {}

  async create(input: ProdutoInput, user: TPayload): Promise<Produtos> {
    // Criar o objeto Produto
    const produto = new Produtos();
    produto.nome = input.nome;

    // Obter o tipo de produto do banco de dados usando o tipoId
    const tipo = await this.tiposRepository.findOne({
      where: { id: input.tipoId },
    });
    produto.tipo = tipo;

    // Criar as características do produto
    const caracteristicas = input.caracteristicas.map((caracteristicaInput) => {
      const caracteristica = new Caracteristicas();
      caracteristica.nome = caracteristicaInput.nome;
      caracteristica.valor = caracteristicaInput.valor;
      return caracteristica;
    });

    // Salvar as características no banco de dados
    produto.caracteristicas = await this.caracteristicasRepository.save(
      caracteristicas,
    );

    // Salvar o objeto Produto no banco de dados
    return await this.produtosRepository.save(produto);
  }
}
