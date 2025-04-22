// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="bg-dark text-white py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título principal */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Transformamos sua Ideia em{' '}
          <span className="text-primary">Soluções Digitais</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Sites modernos, automações, social media e design estratégico. Tudo para sua empresa crescer com presença digital profissional.
        </p>

        {/* Botão CTA */}
        <a
          href="#contato"
          className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-2xl transition-all hover:brightness-110 hover:scale-105"
        >
          Solicite um orçamento gratuito
        </a>
      </div>
    </section>
  );
}
