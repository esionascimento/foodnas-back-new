import { BaseEntity } from './base.entity';
import { Compras } from './compras.entity';
import { Estoque } from './estoque.entity';
import { Fornecedores } from './fornecedores.entity';
import { ItensCompra } from './itens_compra.entity';
import { ItensOrcamento } from './itens_orcamento.entity';
import { VendaItem } from './itens_venda.entity';
import { Lote } from './lote.entity';
import { MeiosPagamento } from './meios_pagamentos.entity';
import { MovimentacoesEstoque } from './movimentacoes_estoque.entity';
import { Orcamento } from './orcamentos.entity';
import { Preco } from './precos.entity';
import { Produto } from './produtos.entity';
import { Usuarios } from './usuarios.entity';
import { Venda } from './vendas.entity';
import { VendasMeioPagamento } from './vendas_meios_pagamentos.entity';

const entities = [
  BaseEntity,
  Usuarios,
  Fornecedores,
  Produto,
  Compras,
  Estoque,
  ItensCompra,
  ItensOrcamento,
  VendaItem,
  Lote,
  MeiosPagamento,
  MovimentacoesEstoque,
  Orcamento,
  Preco,
  VendasMeioPagamento,
  Venda,
];

export default entities;
