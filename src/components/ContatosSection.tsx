import { Heart, Instagram, MessageCircle } from "lucide-react";

const ContatosSection = () => {
  const whatsappNumber = "5519993507007"; // Replace with actual WhatsApp number
  const instagramHandle = "imaginacao_e_arte_helo"; // Replace with actual Instagram handle

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Vi o site da Imaginação é Arte e gostaria de saber mais sobre os produtos personalizados! 💕"
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${instagramHandle}`, "_blank");
  };

  return (
    <section id="contatos" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-kawaii font-bold text-white mb-4 float-animation">
            Vamos Conversar?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-kawaii">
            Conte suas ideias, desejos e sonhos! Estamos aqui para transformar tudo em realidade ✨
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-12">
            <div className="inline-block p-8 bg-white/10 backdrop-blur-md rounded-3xl mb-8 hover:scale-105 transition-transform duration-300">
              <MessageCircle className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-kawaii font-bold text-white mb-4">
                Fale com a gente no WhatsApp!
              </h3>
              <p className="text-white/90 font-kawaii mb-6 max-w-md mx-auto">
                É só um clique de distância! Vamos criar algo incrível juntas 💕
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg font-kawaii transition-all duration-300 hover:scale-105 shadow-floating"
              >
                <MessageCircle className="w-5 h-5 inline mr-2" />
                Conversar no WhatsApp
              </button>
            </div>
          </div>

          {/* Social Media */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-block p-6 bg-white/10 backdrop-blur-md rounded-2xl hover:scale-105 transition-transform duration-300">
                <Instagram className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-xl font-kawaii font-bold text-white mb-2">
                  Siga no Instagram
                </h4>
                <p className="text-white/90 font-kawaii mb-4">
                  Veja nossas criações diárias e se inspire!
                </p>
                <button
                  onClick={handleInstagramClick}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full font-kawaii transition-all duration-300"
                >
                  @{instagramHandle}
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-block p-6 bg-white/10 backdrop-blur-md rounded-2xl hover:scale-105 transition-transform duration-300">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-xl font-kawaii font-bold text-white mb-2">
                  Entregas pelo Brasil
                </h4>
                <p className="text-white/90 font-kawaii mb-4">
                  Levamos nosso carinho até você via Correios
                </p>
                <div className="bg-white/20 text-white font-semibold py-3 px-6 rounded-full font-kawaii">
                  📦 Frete Nacional
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Bottom */}
          <div className="text-center">
            <div className="inline-block p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
              <p className="text-white font-kawaii text-lg mb-4">
                ✨ Transforme suas ideias em realidade ✨
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="btn-whatsapp rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
              >
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatosSection;