# TS-api

### 💻 Projeto

Uma API simples com os metodos de um CRUD, porem utilizando tecnologias modernas, além de aplicar os principais conceitos de SOLID (SRP e DIP)

### 🚀 Tecnologias

- Node
- Fastify
- Typescript
- Jest e Supertest
- Bcrypt

## Como usar

### instale as dependencias

```bash
npm install
```

### Suba um banco com Docker

```bash
docker-compose up -d
```

### inicialize o prisma

```bash
npx prisma migrate dev --name init
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
