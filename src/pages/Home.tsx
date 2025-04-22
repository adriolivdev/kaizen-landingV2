// src/pages/Home.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import ServicesSection from '../components/Services';
import PortfolioSection from '../components/Portfolio';
import ContactSection from '../components/ContactForm';
import OrcamentoEtapasSection from '../components/OrcamentoEtapasSection';
import OnboardingSection from '../components/OnboardingSection';
import SocialSection from '../components/SocialSection';
import WhatsAppFloatButton from '../components/WhatsAppFloatButton';

export default function Home() {
  return (
    <div className="bg-light text-dark">
      <Header />
      <main className="pt-24">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <OrcamentoEtapasSection />
        <OnboardingSection />
        <SocialSection />
        <ContactSection />
        <WhatsAppFloatButton />
      </main>
      <Footer />
    </div>
  );
}