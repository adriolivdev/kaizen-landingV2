import { useState } from 'react';

const faqData = [
  {
    pergunta: 'Quais serviços a Kaizen Code Digital oferece?',
    resposta: 'Oferecemos criação de sites, design estratégico, automação de processos, gestão de redes sociais e marketing digital.'
  },
  {
    pergunta: 'Qual o prazo médio de entrega de um site?',
    resposta: 'O prazo varia de acordo com o escopo, mas em média entregamos sites institucionais entre 5 e 10 dias úteis.'
  },
  {
    pergunta: 'Vocês oferecem suporte após a entrega?',
    resposta: 'Sim! Oferecemos suporte gratuito inicial e planos opcionais de manutenção contínua.'
  },
  {
    pergunta: 'Como funciona o pagamento?',
    resposta: 'O pagamento pode ser feito via PIX ou boleto, com possibilidade de entrada + parcelamento dependendo do projeto.'
  }
];

export default function FAQSection() {
  const [aberta, setAberta] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-32 border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
        <p className="text-gray-600 mb-10">Tire suas dúvidas antes de contratar nossos serviços.</p>

        <div className="space-y-4 text-left">
          {faqData.map((item, index) => (
            <div key={index} className="border rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 font-medium bg-gray-50 hover:bg-gray-100"
                onClick={() => setAberta(aberta === index ? null : index)}
              >
                {item.pergunta}
              </button>
              {aberta === index && (
                <div className="px-6 py-4 text-gray-700 bg-white border-t">
                  {item.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
