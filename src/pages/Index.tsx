import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import IdeiasSection from "@/components/IdeiasSection";
import ContatosSection from "@/components/ContatosSection";
import DiferencialSection from "@/components/DiferencialSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen font-kawaii">
      {/* Header */}
      <Header />
      
      {/* Hero Carousel */}
      <HeroCarousel />
      
      {/* Ideias Section */}
      <IdeiasSection />
      
      {/* Diferencial Section */}
      <DiferencialSection />
      
      {/* Contatos Section */}
      <ContatosSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;