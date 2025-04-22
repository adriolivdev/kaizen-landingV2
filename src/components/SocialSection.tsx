// src/components/SocialSection.tsx
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function SocialSection() {
  return (
    <section className="bg-dark text-white py-16 px-6 md:px-16 lg:px-32 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Conecte-se com a Kaizen</h2>
      <p className="text-gray-300 mb-8">
        Acompanhe nosso trabalho e fale com a equipe nas redes sociais.
      </p>

      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="https://www.instagram.com/kaizencodedigital"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61567241240298"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FaFacebook />
        </a>
        <a
          href="https://wa.link/qcbqwl"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
}
