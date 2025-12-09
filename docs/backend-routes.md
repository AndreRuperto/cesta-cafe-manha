# Rotas de backend sugeridas

Esta proposta cobre as rotas necessárias para persistir os dados exibidos no painel administrativo (vendas, pedidos, clientes, produtos e campanhas) e operações auxiliares. As rotas seguem um estilo REST com respostas JSON.

## Autenticação e sessão
- **POST /auth/login** — Recebe `email` e `senha`, retorna token JWT e dados básicos do usuário.
- **POST /auth/refresh** — Recebe refresh token, devolve novo token JWT.
- **POST /auth/logout** — Invalida o refresh token da sessão atual.

## Métricas e relatórios
- **GET /admin/metrics/overview** — Retorna faturamento, número de pedidos, novos clientes e ticket médio no período atual.
- **GET /admin/metrics/sales-trend?from=AAAA-MM-DD&to=AAAA-MM-DD** — Séries temporais para vendas e novos clientes (dados para o gráfico de linhas).
- **GET /admin/metrics/operations** — Percentuais de pedidos em rota, separação e aguardando pagamento.

## Produtos
- **GET /products?highlight=true&period=week|month** — Lista produtos em destaque (receita, status, SKU).
- **GET /products/:id** — Detalhe completo de um produto.
- **PATCH /products/:id** — Atualiza estoque, preço ou status de visibilidade.

## Pedidos
- **GET /orders?status=...&page=...** — Lista paginada de pedidos recentes, com status e valores.
- **GET /orders/:id** — Detalhe do pedido (itens, endereço, linha do tempo de entrega).
- **POST /orders** — Cria pedido manual (ação rápida do painel), recebendo itens, cliente e endereço.
- **PATCH /orders/:id/status** — Atualiza status logístico (separando, em rota, entregue etc.).

## Clientes
- **GET /customers/:id** — Dados do cliente e histórico de pedidos.
- **POST /customers** — Cria cliente quando incluído manualmente.

## Campanhas e alertas
- **POST /campaigns** — Cria campanha promocional (ação rápida "Criar campanha").
- **POST /alerts** — Registra incidentes ou alertas operacionais (ação rápida "Alertas" / "Relatar incidente").

## Webhooks (opcional)
- **POST /webhooks/payments** — Recebe confirmações de pagamento para atualizar status dos pedidos.
- **POST /webhooks/shipping** — Atualiza eventos de entrega (coleta, rota, entregue).

## Modelo de dados mínimo
- **Pedido**: `id`, `cliente_id`, `total`, `status`, `itens[] {produto_id, quantidade, preco_unitario}`, `enderecos_entrega`, timestamps.
- **Produto**: `id`, `nome`, `sku`, `preco`, `estoque`, `categoria`, `status` (visível, em alta, observação), timestamps.
- **Cliente**: `id`, `nome`, `email`, `telefone`, `enderecos[]`, timestamps.
- **Campanha**: `id`, `nome`, `inicio`, `fim`, `desconto`, `segmento`, timestamps.
- **Alerta**: `id`, `tipo`, `descricao`, `severidade`, `status`, timestamps.

## Qual banco escolher?
Use a mesma fonte de verdade para pedidos, clientes e produtos; Redis fica como cache ou fila de eventos. Comparação rápida:

- **PostgreSQL (recomendado)**: Forte consistência, transações complexas, JSONB para metadados flexíveis, suporte a extensões (p.ex. pg_cron). Bom para relatórios e consultas analíticas simples.
- **MySQL**: Similar em modelo relacional e performance em leitura; ótima escolha se já houver expertise/equipe usando MySQL. Carece de alguns recursos mais avançados de JSON e extensões em comparação ao Postgres.
- **MongoDB**: Útil se o catálogo variar muito de forma (schemas flexíveis) ou se quiser prototipar rápido. Exige cuidado extra com consistência de transações multiplas coleções.
- **Redis** (complementar): Ideal como cache de métricas agregadas e sessões; não usar como banco de domínio principal de pedidos/estoque.

### Sugestão prática
1. **Banco principal**: PostgreSQL ou MySQL para pedidos/clientes/produtos, com chaves estrangeiras garantindo integridade.
2. **Cache**: Redis para sessões JWT/refresh e para métricas agregadas (evita recalcular gráficos toda requisição).
3. **Futuro**: Se precisar de catálogo muito flexível, adicione MongoDB apenas para atributos opcionais de produtos, mantendo o pedido transacional no relacional.
