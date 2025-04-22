// src/components/Header.tsx
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  // Função para rolar suavemente até a seção selecionada
  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuAberto(false); // Fecha o menu após clique em mobile
    }
  };

  return (
    <header className="bg-dark text-white w-full fixed top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center">
        {/* Logo com imagem ao lado do nome */}
        <a href="#" className="flex items-center gap-3">
          <img src="/kaizen-logo.png" alt="Logo Kaizen" className="h-9 w-9 object-contain" />
          <span className="text-xl font-bold text-primary">Kaizen Code Digital</span>
        </a>

        {/* Menu Desktop (visível a partir do md) */}
        <nav className="hidden md:flex gap-8 items-center">
          <button onClick={() => scrollToSection('#servicos')} className="hover:text-primary hover:underline underline-offset-4 transition">
            Serviços
          </button>
          <button onClick={() => scrollToSection('#portfolio')} className="hover:text-primary hover:underline underline-offset-4 transition">
            Portfólio
          </button>
          <button onClick={() => scrollToSection('#contato')} className="hover:text-primary hover:underline underline-offset-4 transition">
            Contato
          </button>
          <button
            onClick={() => scrollToSection('#contato')}
            className="bg-primary text-white px-4 py-2 rounded-xl font-semibold hover:brightness-110 transition shadow-md"
          >
            Solicite um orçamento
          </button>
        </nav>

        {/* Botão hamburguer (Mobile) */}
        <button className="md:hidden focus:outline-none" onClick={() => setMenuAberto(!menuAberto)}>
          {menuAberto ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu Mobile dropdown (exibido quando aberto) */}
      {menuAberto && (
        <div className="md:hidden bg-dark px-6 pb-6 text-center space-y-3">
          <button onClick={() => scrollToSection('#servicos')} className="block w-full text-base py-2 hover:text-primary transition">
            Serviços
          </button>
          <button onClick={() => scrollToSection('#portfolio')} className="block w-full text-base py-2 hover:text-primary transition">
            Portfólio
          </button>
          <button onClick={() => scrollToSection('#contato')} className="block w-full text-base py-2 hover:text-primary transition">
            Contato
          </button>
          <button
            onClick={() => scrollToSection('#contato')}
            className="w-full bg-primary text-white px-4 py-2 rounded-xl font-semibold hover:brightness-110 transition mt-2 shadow-md"
          >
            Solicite um orçamento
          </button>
        </div>
      )}
    </header>
  );
}
