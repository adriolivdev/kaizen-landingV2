// src/components/OnboardingSection.tsx
export default function OnboardingSection() {
    const passos = [
      {
        titulo: '📥 Boas-vindas e Confirmação',
        descricao: 'Enviamos uma mensagem personalizada com o cronograma inicial, canais de contato e links úteis.',
      },
      {
        titulo: '📝 Preenchimento do Briefing',
        descricao: 'Você preenche um formulário com todas as informações importantes para iniciarmos o projeto com clareza.',
      },
      {
        titulo: '📂 Acesso ao Painel do Cliente',
        descricao: 'Liberamos acesso ao seu espaço exclusivo com documentos, status e prazos (ex:Google Drive ou Trello).',
      },
      {
        titulo: '📆 Alinhamento de Expectativas',
        descricao: 'Confirmamos prazos, entregas e definimos checkpoints para revisar o projeto durante o desenvolvimento.',
      },
      {
        titulo: '💬 Canal de Comunicação Ativo',
        descricao: 'Mantemos contato por WhatsApp ou e-mail, com atualizações periódicas e suporte sempre que precisar.',
      },
    ];
  
    return (
      <section id="onboarding" className="py-20 px-6 md:px-16 lg:px-32 bg-white text-dark">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Nosso Onboarding🤝</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Após a aprovação do projeto, damos início a uma jornada de acolhimento com organização, clareza e suporte em cada etapa.
          </p>
  
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-left">
            {passos.map((passo, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-primary"
              >
                <h3 className="text-lg font-bold mb-2">{passo.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{passo.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  