// src/components/Testimonials.tsx
import { FaQuoteLeft } from 'react-icons/fa';

type Depoimento = {
  nome: string;
  texto: string;
  imagem: string;
};

export default function Testimonials() {
  const depoimentos: Depoimento[] = [
    {
      nome: 'Marcos Ferreira',
      texto: 'A Kaizen foi essencial para colocar minha empresa no digital. Atendimento atencioso e resultado acima do esperado!',
      imagem: '/marcos-cliente.png',
    },
    {
      nome: 'Letícia Andrade',
      texto: 'O site ficou lindo e funcional. Meus clientes agora conseguem acessar tudo com facilidade.',
      imagem: '/leticia-cliente.png',
    },
    {
      nome: 'João Silva',
      texto: 'Equipe criativa e comprometida. Já recomendei para vários colegas empreendedores.',
      imagem: '/joao-cliente.png',
    },
    {
      nome: 'Renata Costa',
      texto: 'Profissionais dedicadas e com visão estratégica. A Kaizen transformou a forma como me comunico com meus clientes.',
      imagem: '/renata-cliente.png',
    },
  ];

  return (
    <section className="bg-light text-dark py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl text-primary md:text-4xl font-bold mb-4">O que nossos clientes estão dizendo</h2>
        <p className="text-gray-600 mb-12">
          Os Feedbacks mais recentes do nossos clientes sobre os serviços da Kaizen Code Digital.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {depoimentos.map((d, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
              <img
                src={d.imagem}
                alt={`Foto de ${d.nome}`}
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <FaQuoteLeft className="text-primary text-2xl mb-2" />
              <p className="text-gray-700 italic mb-3">"{d.texto}"</p>
              <p className="font-semibold text-dark">– {d.nome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
