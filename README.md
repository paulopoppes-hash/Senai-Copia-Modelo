# Senai-Copia-Modelo

Cópia Funcional de Repositório Modelo

## Descrição

Este repositorio e uma **copia funcional de repositorios modelos** disponiveis publicamente, desenvolvida como parte da **Aula 03 - Atividade 05** da disciplina Frameworks Front-end.

O objetivo da atividade e realizar a clonagem e analise de um repositorio modelo publico, identificar sua estrutura e funcionamento, e criar uma copia funcional mantendo o versionamento contínuo com Git/GitHub.

## Repositorios modelos analisados

Durante a atividade, foram analisados os seguintes repositorios modelos disponiveis publicamente (referenciados nos materiais da aula):

| # | Repositorio | Descricao | Link |
|---|-------------|-----------|------|
| 1 | `deivisontakatu/projeto-react` | Projeto exemplo com React | https://github.com/deivisontakatu/projeto-react |
| 2 | `deivisontakatu/aula-react` | Conceitos fundamentais de React (JSX, componentes, props) | https://github.com/deivisontakatu/aula-react |
| 3 | `deivisontakatu/aula-javascript` | Exemplos de JavaScript, DOM e eventos | https://github.com/deivisontakatu/aula-javascript |
| 4 | `deivisontakatu/aula-css` | Exemplos de CSS, classes e IDs | https://github.com/deivisontakatu/aula-css |
| 5 | `deivisontakatu/aula-gestao-produto` | Conceitos de gestão de produto e backlog | https://github.com/deivisontakatu/aula-gestao-produto |
| 6 | `deivisontakatu/aula-scrum` | Conceitos do framework ágil Scrum | https://github.com/deivisontakatu/aula-scrum |

## Tecnologias utilizadas

- **React 18** — biblioteca para interfaces de usuário
- **TypeScript** — tipagem estática
- **Vite** — build e servidor de desenvolvimento
- **Git / GitHub** — versionamento contínuo

## Estrutura do projeto

```
copia-modelo/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── src/
│   ├── main.tsx      — ponto de entrada do React
│   ├── App.tsx       — componente principal com lista de modelos
│   └── App.css       — estilos
```

## Como o protótipo funciona

O prototipo e uma pagina que lista os repositorios modelos analisados durante a atividade. Cada item exibe o nome, descricao e um link direto para o repositorio original no GitHub.

Uma secao de observacoes explica o processo realizado: identificacao de modelos publicos, analise de estrutura e funcionamento, e criacao da copia funcional com versionamento Git.

## Requisitos atendidos (Aula 03 - Atividade 05)

- [x] Clonagem/analise de repositorio modelo publico
- [x] Identificacao de estrutura e funcionamento
- [x] Cópia funcional mantendo versionamento com Git/GitHub
- [x] Documentacao do processo realizado

## Como executar

1. Instale as dependencias:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse a URL gerada pelo Vite (por default: `http://localhost:5173`)

Para build de producao:
```bash
npm run build
```

## Repositorio principal

[senai-framework-frontend](https://github.com/paulopoppes-hash/senai-framework-frontend)
