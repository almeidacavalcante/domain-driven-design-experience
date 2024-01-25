# Sistema de Gerenciamento de Tarefas e Projetos

Este projeto é um Sistema de Gerenciamento de Tarefas e Projetos desenvolvido em TypeScript com Node.js, aplicando os princípios do Domain-Driven Design (DDD). Ele oferece funcionalidades para criação, atribuição, acompanhamento e gerenciamento de tarefas e projetos, além de um sistema integrado de notificações para manter os usuários atualizados sobre as mudanças importantes.

## Funcionalidades

- **Criação e Gerenciamento de Projetos**: Crie e gerencie projetos, definindo prazos e atribuindo tarefas.
- **Gestão de Tarefas**: Adicione, atualize e remova tarefas dentro de cada projeto.
- **Atribuição de Tarefas**: Atribua tarefas a diferentes usuários e acompanhe o progresso.
- **Notificações**: Receba notificações para atualizações importantes, como atribuição de tarefas, lembretes de prazos e mudanças de status.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **TypeScript**: Linguagem de programação tipada baseada em JavaScript.
- **DDD**: Princípios de Domain-Driven Design para estruturar a lógica de negócios.

## Estrutura do Projeto

- `src/`
    - `domain/`: Contém os modelos de entidades, objetos de valor e serviços de domínio.
    - `application/`: Lógica de aplicação que orquestra o uso de entidades e serviços de domínio.
    - `infrastructure/`: Implementação da camada de infraestrutura, como banco de dados e mecanismos de notificação.
- `tests/`: Testes unitários para as diferentes partes do sistema.


# Commandos

```bash
pnpm init
pnpm i typescript @types/node -D
npx tsc --init
pnpm i vitest -D

# Tests

pnpm i jest ts-jest @types/jest -D
```

