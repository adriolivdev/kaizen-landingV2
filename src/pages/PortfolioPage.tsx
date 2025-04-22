// src/pages/PortfolioPage.tsx
import { useState } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaTimes,
  FaSearch,
  FaArrowLeft,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
} from 'react-icons/si';
import { Link } from 'react-router-dom';
import LayoutBase from '../components/LayoutBase';

const iconesStacks: Record<string, React.ReactNode> = {
  react: <FaReact className="text-sky-500" title="React" />,
  node: <FaNodeJs className="text-green-600" title="Node.js" />,
  html: <FaHtml5 className="text-orange-500" title="HTML5" />,
  css: <FaCss3Alt className="text-blue-500" title="CSS3" />,
  tailwind: <SiTailwindcss className="text-cyan-400" title="Tailwind CSS" />,
  js: <SiJavascript className="text-yellow-400" title="JavaScript" />,
  ts: <SiTypescript className="text-blue-600" title="TypeScript" />,
  python: <FaPython className="text-yellow-300" title="Python" />,
};

type Projeto = {
  nome: string;
  descricao: string;
  imagem: string;
  link: string;
  stacks: string[];
  categoria: string;
};

const todosProjetos: Projeto[] = [
  {
    nome: 'Yuri SoundCar',
    descricao: 'Landing page para loja de acessórios automotivos.',
    imagem: '/portfolio/yuri-soundcar.png',
    link: 'https://yurisoundcar.vercel.app',
    stacks: ['react', 'tailwind', 'ts'],
    categoria: 'Landing Pages',
  },
  {
    nome: 'Top Instalações',
    descricao: 'Site institucional para serviços residenciais.',
    imagem: '/portfolio/top-instalacoes.png',
    link: 'https://topinstalacoes.vercel.app',
    stacks: ['react', 'tailwind'],
    categoria: 'Landing Pages',
  },
  {
    nome: 'Bot de Finanças',
    descricao: 'Automação com Python para registrar receitas e despesas.',
    imagem: '/portfolio/bot-financas.png',
    link: '#',
    stacks: ['python'],
    categoria: 'Automação & Bots',
  },
];

export default function PortfolioPage() {
  const [busca, setBusca] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null);

  const categorias = ['Todos', ...new Set(todosProjetos.map(p => p.categoria))];
  const stacksUnicas = Array.from(new Set(todosProjetos.flatMap(p => p.stacks)));

  const projetosFiltrados = todosProjetos.filter((projeto) => {
    const termo = busca.toLowerCase();
    const correspondeBusca =
      projeto.nome.toLowerCase().includes(termo) ||
      projeto.categoria.toLowerCase().includes(termo) ||
      projeto.stacks.some((stack) => stack.toLowerCase().includes(termo));
    const correspondeCategoria =
      categoriaSelecionada === 'Todos' || projeto.categoria === categoriaSelecionada;
    return correspondeBusca && correspondeCategoria;
  });

  return (
    <LayoutBase>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Todos os Projetos</h1>
        <Link to="/" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary">
          <FaArrowLeft /> Voltar para Home
        </Link>
      </div>

      {/* Filtro por categoria */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categorias.map((cat, index) => (
          <button
            key={index}
            onClick={() => setCategoriaSelecionada(cat)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              categoriaSelecionada === cat
                ? 'bg-primary text-dark border-primary'
                : 'border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Campo de busca com ícone de lupa */}
      <div className="relative w-full max-w-md mx-auto mb-12">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar por nome, categoria ou tecnologia..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {/* Filtro por stack clicável */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {stacksUnicas.map((stack, idx) => (
          <button
            key={idx}
            onClick={() => setBusca(stack)}
            className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-300"
          >
            {stack}
          </button>
        ))}
      </div>

      {/* Lista de projetos */}
      {projetosFiltrados.length > 0 ? (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projetosFiltrados.map((projeto, j) => (
            <div
              key={j}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              <img
                src={projeto.imagem}
                alt={`Imagem de ${projeto.nome}`}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{projeto.nome}</h3>
                  <p className="text-gray-600 text-sm mb-4">{projeto.descricao}</p>
                  <div className="flex flex-wrap gap-3 items-center mb-4">
                    {projeto.stacks.map((stack, idx) => (
                      <span key={idx} className="text-2xl">
                        {iconesStacks[stack]}
                      </span>
                    ))}
                  </div>
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-dark px-5 py-2 rounded-xl text-sm font-semibold hover:brightness-110 transition"
                  >
                    Ver projeto ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-12">Nenhum projeto encontrado.</p>
      )}

      {/* Modal */}
      {projetoSelecionado && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-lg relative p-6">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setProjetoSelecionado(null)}
            >
              <FaTimes />
            </button>
            <img
              src={projetoSelecionado.imagem}
              alt={`Imagem de ${projetoSelecionado.nome}`}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <h2 className="text-2xl font-bold mb-2">{projetoSelecionado.nome}</h2>
            <p className="text-gray-700 mb-4">{projetoSelecionado.descricao}</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {projetoSelecionado.stacks.map((stack, idx) => (
                <span key={idx} className="text-2xl">
                  {iconesStacks[stack]}
                </span>
              ))}
            </div>
            <a
              href={projetoSelecionado.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-dark px-6 py-3 rounded-xl font-semibold hover:brightness-110"
            >
              Ver projeto ↗
            </a>
          </div>
        </div>
      )}
    </LayoutBase>
  );
}
