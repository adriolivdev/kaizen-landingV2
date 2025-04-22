import { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    if (!formData.get('consentimento')) {
      alert('Você precisa aceitar os termos de privacidade para continuar.');
      return;
    }

    const data = new URLSearchParams();
    data.append('nome', formData.get('nome') as string);
    data.append('email', formData.get('email') as string);
    data.append('whatsapp', formData.get('whatsapp') as string);
    data.append('assunto', formData.get('assunto') as string);
    data.append('mensagem', formData.get('mensagem') as string);

    try {
      await axios.post(
        'https://script.google.com/macros/s/AKfycbxuDHc4CuNCLOqvy3IUlmFCvGapEpuIn-aSynAi4QXLhBteGdRLUn6oKCXdp5yNoR_YSA/exec',
        data
      );
      console.log('Mensagem enviada com sucesso');
      setEnviado(true);
      form.reset();
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
    }
  };

  return (
    <section id="contato" className="bg-gray-50 text-dark py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
        <p className="text-gray-600 mb-10">
          Solicite um orçamento gratuito ou tire dúvidas. Nossa equipe está pronta para te ajudar.
        </p>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl p-8 space-y-6 text-left">
          <div>
            <label htmlFor="nome" className="block mb-1 font-medium">Seu nome</label>
            <input type="text" id="nome" name="nome" required className="w-full px-4 py-3 border rounded-xl bg-gray-50" />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Seu e-mail</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-3 border rounded-xl bg-gray-50" />
          </div>

          <div>
            <label htmlFor="whatsapp" className="block mb-1 font-medium">WhatsApp (com DDD)</label>
            <input type="tel" id="whatsapp" name="whatsapp" required className="w-full px-4 py-3 border rounded-xl bg-gray-50" />
          </div>

          <div>
            <label htmlFor="assunto" className="block mb-1 font-medium">Assunto</label>
            <input type="text" id="assunto" name="assunto" required className="w-full px-4 py-3 border rounded-xl bg-gray-50" />
          </div>

          <div>
            <label htmlFor="mensagem" className="block mb-1 font-medium">Sua mensagem</label>
            <textarea id="mensagem" name="mensagem" rows={5} required className="w-full px-4 py-3 border rounded-xl bg-gray-50" />
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" id="consentimento" name="consentimento" required className="mt-1" />
            <label htmlFor="consentimento" className="text-sm text-gray-600">
              Eu concordo com a <a href="/politica" target="_blank" className="underline text-primary hover:brightness-110">política de privacidade</a> e autorizo o contato por e-mail ou WhatsApp.
            </label>
          </div>

          <button type="submit" className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:brightness-110 transition">
            ✉️ Enviar mensagem
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
