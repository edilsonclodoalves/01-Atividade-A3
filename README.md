# API de Gerenciamento de Clientes e Produtos

Este projeto é uma API RESTful desenvolvida com Node.js, Restify e Knex para gerenciar informações de **clientes** e **produtos**. Ele utiliza uma arquitetura em camadas com controllers, repositórios e rotas organizadas.

## 📁 Estrutura do Projeto

```
01-Atividade-A3-main/
│
├── package.json               # Dependências e scripts do projeto
└── src/
    ├── app.js                 # Inicialização da aplicação
    ├── db/db.js              # Conexão com o banco de dados
    ├── controllers/          # Lógica de controle
    │   ├── client.controller.js
    │   └── product.controller.js
    ├── repositories/         # Acesso a dados
    │   ├── client.repository.js
    │   └── product.repository.js
    └── routes/               # Definição de rotas da API
        ├── client.routes.js
        └── product.routes.js
```

## 🚀 Como executar o projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/edilsonclodoalves/01-Atividade-A3.git
   cd 01-Atividade-A3-main
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o banco de dados**
   - Edite o arquivo `src/db/db.js` com suas credenciais de conexão.

4. **Inicie o servidor**
   ```bash
   node src/app.js
   ```

## 🔌 Endpoints disponíveis

### Clientes
- `GET /clients` — Lista todos os clientes
- `GET /clients/:id` — Retorna um cliente específico
- `POST /clients` — Cria um novo cliente
- `PUT /clients/:id` — Atualiza um cliente
- `DELETE /clients/:id` — Remove um cliente

### Produtos
- `GET /products` — Lista todos os produtos
- `GET /products/:id` — Retorna um produto específico
- `POST /products` — Cria um novo produto
- `PUT /products/:id` — Atualiza um produto
- `DELETE /products/:id` — Remove um produto

## 🛠 Tecnologias utilizadas

- Node.js
- Restify
- MySQL
- Knex
- JavaScript

## 👨‍💻 Autor
Edilson Clodoalves Galvão de Lima - RA 32214931
Desenvolvido como atividade A3 da disciplina de programação para web.

---

