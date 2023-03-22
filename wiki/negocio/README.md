1. Inserir um novo usuário na tabela 'usuarios':

```
INSERT INTO usuarios (nome_usuario, email, senha)
VALUES ('nome_do_usuario', 'email_do_usuario', 'senha_do_usuario');
```

---

2. Inserir um novo fornecedor na tabela 'fornecedores' associado ao usuário criado anteriormente:

```
INSERT INTO fornecedores (nome_fornecedor, endereco, id_usuario)
VALUES ('nome_do_fornecedor', 'endereco_do_fornecedor', 1);
```

> Note: (onde '1' é o ID do usuário criado no passo 1)

---

3. Inserir um novo produto na tabela 'produtos' associado ao usuário criado anteriormente:

```
INSERT INTO produtos (nome_produto, descricao, unidade, id_usuario)
VALUES ('nome_do_produto', 'descricao_do_produto', 'unidade_do_produto', 1);
```

> Note: (onde '1' é o ID do usuário criado no passo 1)

---

4. Inserir um novo lote do produto criado no passo anterior na tabela 'lotes' associado ao usuário criado anteriormente:

```
INSERT INTO lotes (id_produto, numero_lote, data_validade, quantidade, id_usuario)
VALUES (1, 'numero_do_lote', 'data_validade_do_lote', 100, 1);
```

> Note: (onde '1' é o ID do usuário criado no passo 1 e '1' é o ID do produto criado no passo 3)

---

5. Inserir um novo preço do produto criado no passo anterior na tabela 'precos' associado ao usuário criado anteriormente e ao lote criado anteriormente:

```
INSERT INTO precos (id_produto, data_semana, preco_compra, preco_venda, id_fornecedor, id_lote, id_usuario)
VALUES (1, 'data_semana_do_preco', 50.00, 80.00, 1, 1, 1);
```

> Note: (onde '1' é o ID do usuário criado no passo 1, '1' é o ID do produto criado no passo 3, '1' é o ID do fornecedor criado no passo 2 e '1' é o ID do lote criado no passo 4)

---

6. Inserir um novo item no estoque na tabela 'estoque' associado ao lote criado anteriormente e ao usuário criado anteriormente:

```
INSERT INTO estoque (id_lote, quantidade, id_usuario)
VALUES (1, 100, 1);
```

> Note: (onde '1' é o ID do usuário criado no passo 1 e '1' é o ID do lote criado no passo 4)

---

7. Agora vamos inserir os preços dos produtos do novo fornecedor na tabela "precos". Para isso, precisamos identificar o id do novo fornecedor e do novo lote. Supondo que o id do novo fornecedor seja 1 e o id do novo lote seja 1, a query seria:

```
INSERT INTO precos (id_produto, data_semana, preco_compra, preco_venda, id_fornecedor, id_lote, id_usuario)
VALUES (1, '2023-03-18', 5.00, 10.00, 1, 1, 1);
```

- Isso adicionará um novo registro na tabela "precos" com as informações do produto, data da semana, preços de compra e venda, id do fornecedor, id do lote e id do usuário que está inserindo o registro.

---

8. Agora vamos adicionar o novo produto ao estoque com uma quantidade inicial. Supondo que a quantidade inicial seja de 100 unidades, a query seria:

```
INSERT INTO estoque (id_lote, quantidade, id_usuario) VALUES (1, 100, 1);
```

- Isso adicionará um novo registro na tabela "estoque" com as informações do lote, quantidade e id do usuário que está inserindo o registro.

---

9. Agora vamos adicionar o novo preço de venda do produto na tabela "precos". Supondo que o preço de venda seja de R$ 15,00, a query seria:

```
UPDATE precos SET preco_venda = 15.00 WHERE id_produto = 1 AND id_lote = 1;
```

- Isso atualizará o registro na tabela "precos" com o novo preço de venda.

---

10. Inserir uma nova venda:

```
INSERT INTO vendas (data_venda, valor_total, id_usuario)
VALUES ('2023-03-18', 100.00, 1);
```

---

11. Adicionar itens à venda:

- Adicionando item 1

```
INSERT INTO itens_venda (id_venda, id_lote, quantidade, valor_unitario, id_usuario)
VALUES (1, 1, 2, 50.00, 1);
```

- Adicionando item 2

```
INSERT INTO itens_venda (id_venda, id_lote, quantidade, valor_unitario, id_usuario)
VALUES (1, 2, 3, 20.00, 1);
```

---

12. Atualizar o estoque após a venda:

- Atualizando estoque do lote 1

```
UPDATE estoque SET quantidade = quantidade - 2 WHERE id_lote = 1;
```

- Atualizando estoque do lote 2

```
UPDATE estoque SET quantidade = quantidade - 3 WHERE id_lote = 2;
```

---

13. Adicionar um novo meio de pagamento:

```
INSERT INTO meios_pagamento (descricao) VALUES ('Cartão de Crédito');
```

---

14. Registrar o pagamento da venda com o novo meio de pagamento:

```
INSERT INTO vendas_meios_pagamento (id_venda, id_meio_pagamento, valor)
VALUES (1, 1, 100.00);
```

---
