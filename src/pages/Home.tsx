// src/pages/Home.tsx
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import SocialSection from '../components/SocialSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <SocialSection />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
