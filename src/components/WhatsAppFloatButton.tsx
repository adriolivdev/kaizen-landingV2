import { FaWhatsapp } from 'react-icons/fa';

// Garantir tipagem para o fbq do Pixel (evita erro no TS)
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function WhatsAppFloatButton() {
  return (
    <a
      href="https://wa.link/qcbqwl"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (window.fbq) {
          window.fbq('track', 'Contact');
        }
      }}
      className="fixed bottom-5 right-5 z-50 p-4 rounded-full text-white bg-green-500 shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}
