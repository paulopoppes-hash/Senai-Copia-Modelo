interface Conceito {
  id: number
  nome: string
  descricao: string
  link: string
}

interface ConceitoCardProps {
  conceito: Conceito
}

function ConceitoCard({ conceito }: ConceitoCardProps) {
  return (
    <div className="card">
      <h3 className="card-titulo">{conceito.nome}</h3>
      <p className="card-descricao">{conceito.descricao}</p>
      <a className="card-link" href={conceito.link} target="_blank" rel="noopener noreferrer">
        Ver repositório original
      </a>
    </div>
  )
}

export default function App() {
  const modelos: Conceito[] = [
    {
      id: 1,
      nome: 'Projeto React (Modelo)',
      descricao: 'Repositório modelo de exemplo com React, utilizado como base para cópia funcional.',
      link: 'https://github.com/deivisontakatu/projeto-react',
    },
    {
      id: 2,
      nome: 'Aula React (Conceitos)',
      descricao: 'Repositório com conceitos fundamentais de React (JSX, componentes, props).',
      link: 'https://github.com/deivisontakatu/aula-react',
    },
    {
      id: 3,
      nome: 'Aula JavaScript',
      descricao: 'Repositório com exemplos de JavaScript, DOM e eventos.',
      link: 'https://github.com/deivisontakatu/aula-javascript',
    },
    {
      id: 4,
      nome: 'Aula CSS',
      descricao: 'Repositório com exemplos de CSS, classes e IDs.',
      link: 'https://github.com/deivisontakatu/aula-css',
    },
    {
      id: 5,
      nome: 'Aula Gestão de Produto',
      descricao: 'Repositório com conceitos de gestão de produto e backlog.',
      link: 'https://github.com/deivisontakatu/aula-gestao-produto',
    },
    {
      id: 6,
      nome: 'Aula Scrum',
      descricao: 'Repositório com conceitos do framework ágil Scrum.',
      link: 'https://github.com/deivisontakatu/aula-scrum',
    },
  ]

  return (
    <div className="app">
      <header className="cabecalho">
        <h1>Senai - Copia Funcional de Repositorio Modelo</h1>
        <p className="subtitulo">
          Este repositorio e uma copia funcional de projetos modelos disponiveis publicamente,
          mantendo o historico de versionamento com Git/GitHub.
        </p>
      </header>

      <div className="modelos-grid">
        {modelos.map((modelo) => (
          <ConceitoCard key={modelo.id} conceito={modelo} />
        ))}
      </div>

      <div className="observacoes">
        <h2>O que foi feito nesta atividade</h2>
        <ul>
          <li>Foram identificados repositorios modelos publicos relacionados a Frameworks Front-end.</li>
          <li>Cada repositorio foi analisado quanto a estrutura, framework utilizado e funcionamento.</li>
          <li>Foi criada uma copia funcional adaptada, mantendo versionamento com Git.</li>
          <li>Os links dos repositorios originais sao mantidos para referencia e credito.</li>
        </ul>
      </div>
    </div>
  )
}
