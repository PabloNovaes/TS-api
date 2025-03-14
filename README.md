# TS-api

### 💻 Projeto

Uma API simples com os metodos de um CRUD, porem utilizando tecnologias modernas, além de aplicar os principais conceitos de SOLID (SRP e DIP)

### 🚀 Tecnologias

- Node
- Fastify
- Postgres
- Typescript
- Jest e Supertest
- Bcrypt

## Testando o projeto

### Instale as dependencias

```bash
npm install
```

### Rode o script abaixo para inicializar o container docker e o prisma client, além de subir a estrutura do schema.prisma para o banco

```bash
npm run init-db
```

### Inicialize o servidor

```bash
npm run dev
```

## Como testar

A aplicação conta com testes unitarios e de integração, então possuem scripts diferentes para cada

### Integração

```bash
npm run test:integration
```

### Unitários

```bash
npm run test:unit
```
