# NLW Agents

Projeto desenvolvido durante o evento NLW da **Rocketseat** para demonstrar o uso de agentes inteligentes na web.

- [Back-end - API](https://github.com/leticea/nlw-agents-nodejs)

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/en/) - v22.16.0
- [Npm](https://www.npmjs.com/) - 10.8.1
- [React](https://react.dev/) - ^19.1.0
- [Vite](https://vitejs.dev/guide/) - ^7.0.3
- [TypeScript](https://www.typescriptlang.org/) - ~5.8.3
- [Tailwindcss](https://tailwindcss.com/) - ^4.1.11
- [React-router-dom](https://reactrouter.com/) - ^7.6.3
- [TanStack React Query](https://tanstack.com/query/latest) - ^5.82.0
- [Shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react) - ^0.525.0

## 📂 Padrões de Projeto

- **Component-based Architecture** - Arquitetura baseada em componentes React
- **File-based Routing** - Roteamento baseado em arquivos com React Router
- **Server State Management** - Gerenciamento de estado servidor com React Query
- **Variant-based Components** - Componentes com variantes usando CVA
- **Composition Pattern** - Padrão de composição com Radix Slot
- **Path Aliasing** - Alias de caminhos (`@/` aponta para `src/`)

## ⚙️ Configuração do Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse a aplicação em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção

### Backend

O projeto consome uma API que deve estar rodando na porta 3333. Certifique-se de que o backend esteja configurado e executando antes de iniciar o frontend.

## 🛠️ Estrutura do Projeto

```
src/
├── components/ui/    # Componentes de interface
├── pages/           # Páginas da aplicação
├── lib/             # Utilitários e configurações
└── app.tsx          # Componente raiz
```
