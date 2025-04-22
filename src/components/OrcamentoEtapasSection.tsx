// src/components/OrcamentoEtapasSection.tsx
export default function OrcamentoEtapasSection() {
    const etapas = [
      {
        titulo: '1. Primeiro Contato',
        descricao: 'Você preenche nosso formulário ou nos chama no WhatsApp para contar o que precisa.',
      },
      {
        titulo: '2. Análise e Proposta',
        descricao: 'Nossa equipe analisa sua necessidade e envia uma proposta sob medida com valores e prazos.',
      },
      {
        titulo: '3. Confirmação e Contrato',
        descricao: 'Após aprovação da proposta, confirmamos os dados, enviamos o contrato e começamos o projeto.',
      },
      {
        titulo: '4. Desenvolvimento e Aprovação',
        descricao: 'Criamos, revisamos com você e ajustamos até tudo ficar do seu jeitinho. 💻',
      },
      {
        titulo: '5. Entrega Final',
        descricao: 'Você recebe tudo pronto, com garantia e suporte inicial gratuito. 🥳',
      },
    ];
  
    return (
      <section id="orcamento" className="py-20 px-6 md:px-16 lg:px-32 bg-gray-100 text-dark">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Como funciona nosso Orçamento?🤔</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Nosso processo é transparente, organizado e pensado pra facilitar sua vida desde o primeiro contato até a entrega final.
          </p>
  
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-left">
            {etapas.map((etapa, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border-l-4 border-primary"
              >
                <h3 className="text-xl font-bold mb-2">{etapa.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{etapa.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  