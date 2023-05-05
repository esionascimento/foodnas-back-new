import { BaseEntity } from './base.entity';
import { Compras } from './compras.entity';
import { Estoque } from './estoque.entity';
import { Fornecedores } from './fornecedores.entity';
import { ItensCompra } from './itens_compra.entity';
import { ItensOrcamento } from './itens_orcamento.entity';
import { VendaItem } from './itens_venda.entity';
import { Lojas } from './lojas.entity';
import { Lotes } from './lote.entity';
import { MeiosPagamento } from './meios_pagamentos.entity';
import { MovimentacoesEstoque } from './movimentacoes_estoque.entity';
import { Orcamento } from './orcamentos.entity';
import { Permissoes } from './permissoes.entity';
import { Preco } from './precos.entity';
import { Produtos } from './produtos.entity';
import { Roles } from './roles.entity';
import { Usuarios } from './usuarios.entity';
import { Venda } from './vendas.entity';
import { VendasMeioPagamento } from './vendas_meios_pagamentos.entity';

const entities = [
  BaseEntity,
  Usuarios,
  Fornecedores,
  Produtos,
  Compras,
  Estoque,
  ItensCompra,
  ItensOrcamento,
  VendaItem,
  Lotes,
  MeiosPagamento,
  MovimentacoesEstoque,
  Orcamento,
  Preco,
  VendasMeioPagamento,
  Venda,
  Lojas,
  Permissoes,
  Roles,
];

export default entities;
