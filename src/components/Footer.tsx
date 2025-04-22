// src/components/Footer.tsx
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Sobre */}
        <div>
          <h3 className="text-xl font-bold mb-3">Kaizen Code Digital</h3>
          <p className="text-gray-400 text-sm">
            Soluções digitais criativas para microempreendedores e pequenas empresas.
          </p>
          <p className="text-gray-500 text-xs mt-4">CNPJ: 00.000.000/0001-00</p>
        </div>

        {/* Espaço reservado para manter layout */}
        <div></div>

        {/* Redes sociais */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Redes Sociais</h4>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.instagram.com/kaizencodedigital"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/kaizencodedigital"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kaizen Code Digital. Todos os direitos reservados.
      </div>
    </footer>
  );
}
