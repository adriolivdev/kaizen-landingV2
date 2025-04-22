// src/components/Services.tsx
import {
    FaGlobe,
    FaPaintBrush,
    FaRobot,
    FaComments,
    FaChartLine,
  } from 'react-icons/fa';
  
  export default function Services() {
    const servicos = [
      {
        nome: 'Criação de Sites',
        descricao: 'Sites modernos, responsivos e com foco em conversão.',
        icone: <FaGlobe size={32} className="text-primary mb-3" />,
      },
      {
        nome: 'Design Estratégico',
        descricao: 'Identidade visual, logotipos e criativos profissionais.',
        icone: <FaPaintBrush size={32} className="text-primary mb-3" />,
      },
      {
        nome: 'Automação de Processos',
        descricao: 'Ganhe tempo com automações personalizadas e eficientes.',
        icone: <FaRobot size={32} className="text-primary mb-3" />,
      },
      {
        nome: 'Social Media',
        descricao: 'Gestão de conteúdo e presença digital estratégica.',
        icone: <FaComments size={32} className="text-primary mb-3" />,
      },
      {
        nome: 'Marketing Digital',
        descricao: 'Análise de dados e campanhas para atrair mais clientes.',
        icone: <FaChartLine size={32} className="text-primary mb-3" />,
      },
    ];
  
    return (
      <section id="servicos" className="bg-light text-dark py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Soluções sob medida para destacar sua empresa no ambiente digital.
          </p>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicos.map((servico, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="flex flex-col items-center text-center">
                  {servico.icone}
                  <h3 className="text-xl font-semibold mb-2">{servico.nome}</h3>
                  <p className="text-gray-600">{servico.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  