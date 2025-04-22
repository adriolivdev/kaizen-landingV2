// src/pages/Politica.tsx

export default function Politica() {
    return (
      <section className="min-h-screen bg-white text-dark py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Política de Privacidade</h1>
  
          <p>
            Na <strong>Kaizen Code Digital</strong>, valorizamos sua privacidade e estamos comprometidos em proteger seus dados.
          </p>
  
          <h2 className="text-2xl font-semibold mt-6">1. Coleta de Dados</h2>
          <p>
            Coletamos os dados fornecidos voluntariamente por meio do nosso formulário de contato: nome, e-mail, WhatsApp, assunto e mensagem.
          </p>
  
          <h2 className="text-2xl font-semibold mt-6">2. Uso dos Dados</h2>
          <p>
            Seus dados são utilizados exclusivamente para:
            <ul className="list-disc ml-6 mt-2">
              <li>Entrar em contato com você sobre seu pedido de orçamento ou dúvida;</li>
              <li>Responder mensagens enviadas através do formulário.</li>
            </ul>
          </p>
  
          <h2 className="text-2xl font-semibold mt-6">3. Compartilhamento</h2>
          <p>
            Não compartilhamos suas informações com terceiros, exceto para integração com ferramentas de automação e planilhas de controle (ex: Google Sheets), sempre de forma segura.
          </p>
  
          <h2 className="text-2xl font-semibold mt-6">4. Segurança</h2>
          <p>
            Adotamos medidas de segurança para proteger suas informações contra acessos não autorizados.
          </p>
  
          <h2 className="text-2xl font-semibold mt-6">5. Consentimento</h2>
          <p>
            Ao marcar o checkbox do formulário, você concorda com esta política e autoriza o contato via e-mail ou WhatsApp.
          </p>
  
          <h2 className="text-2xl font-semibold mt-6">6. Direitos do Usuário</h2>
          <p>
            Você pode solicitar a exclusão ou revisão dos seus dados a qualquer momento entrando em contato conosco.
          </p>
  
          <p className="mt-10 text-sm text-gray-500">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </section>
    );
  }
  