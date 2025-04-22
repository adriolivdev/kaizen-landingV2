// src/components/ContactForm.tsx
import { useState } from 'react';

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aqui você vai integrar com o Zapier ou Sheets depois
    console.log('Mensagem simulada enviada');

    setEnviado(true);

    // Resetar após 5s
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <section id="contato" className="bg-white text-dark py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
        <p className="text-gray-600 mb-8">
          Solicite seu orçamento ou tire dúvidas. Responderemos o mais breve possível.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label htmlFor="nome" className="block mb-1 font-medium">
              Seu nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Seu e-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block mb-1 font-medium">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary text-dark font-semibold px-6 py-3 rounded-xl hover:brightness-110 transition"
          >
            Enviar mensagem
          </button>

          {enviado && (
            <p className="mt-4 text-green-600 font-medium text-center">
              ✅ Mensagem enviada com sucesso! Em breve entraremos em contato.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
