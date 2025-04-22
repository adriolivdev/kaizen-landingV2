// src/components/Portfolio.tsx
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const projetos = [
    {
      nome: 'Yuri SoundCar',
      descricao: 'Landing page para loja de acessórios e serviços automotivos.',
      imagem: '/portfolio/yuri-soundcar.png',
      link: 'https://yurisoundcar.vercel.app',
    },
    {
      nome: 'Top Instalações',
      descricao: 'Site institucional fictício para serviços residenciais.',
      imagem: '/portfolio/top-instalacoes.png',
      link: 'https://topinstalacoes.vercel.app',
    },
  ];

  return (
    <section id="portfolio" className="bg-white text-dark py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfólio</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Veja alguns projetos desenvolvidos pela nossa equipe.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projetos.map((projeto, index) => (
            <a
              key={index}
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-light rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={projeto.imagem}
                alt={`Projeto ${projeto.nome}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-1">{projeto.nome}</h3>
                <p className="text-gray-600 text-sm">{projeto.descricao}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/portfolio"
            className="bg-primary text-dark font-semibold px-6 py-3 rounded-xl hover:brightness-110 transition"
          >
            Ver todos os projetos
          </Link>
        </div>
      </div>
    </section>
  );
}
