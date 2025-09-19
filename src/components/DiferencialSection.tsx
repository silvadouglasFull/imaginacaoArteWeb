import { Sparkles, Heart, Palette, Gift, Star, Users } from "lucide-react";

const DiferencialSection = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "100% Personalizado",
      description: "Cada item é único e feito especialmente para você. Nada de produtos iguais para todo mundo!"
    },
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Colocamos carinho e atenção em cada detalhe. Você sente a diferença no resultado final."
    },
    {
      icon: Palette,
      title: "Sua Criatividade",
      description: "Você imagina como quer que seja e nós damos vida às suas ideias mais criativas."
    },
    {
      icon: Gift,
      title: "Qualidade Premium",
      description: "Usamos apenas materiais de alta qualidade para que seus produtos durem muito tempo."
    },
    {
      icon: Star,
      title: "Exclusividade Total",
      description: "Tenha algo que ninguém mais tem! Seu estilo único merece produtos únicos também."
    },
    {
      icon: Users,
      title: "Atendimento Especial",
      description: "Conversamos com você do início ao fim, garantindo que tudo saia perfeito!"
    }
  ];

  return (
    <section id="diferencial" className="py-20 bg-gradient-to-br from-background to-kawaii-mint/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-kawaii font-bold text-gradient mb-4">
            Por que Escolher a Gente?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-kawaii">
            Porque ter liberdade para criar seu caderno ou agenda é muito melhor 
            do que comprar algo pronto que pode não agradar! ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="card-kawaii text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-kawaii font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground font-kawaii leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-kawaii p-8 md:p-12">
          <h3 className="text-3xl font-kawaii font-bold text-center text-gradient mb-8">
            Veja a Diferença
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Generic Products */}
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 mx-auto bg-gray-400 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">😔</span>
              </div>
              <h4 className="text-xl font-kawaii font-bold text-gray-700 mb-4">
                Produtos Comuns
              </h4>
              <ul className="text-left space-y-2 text-gray-600 font-kawaii">
                <li>❌ Igual para todo mundo</li>
                <li>❌ Sem personalidade</li>
                <li>❌ Pode não agradar</li>
                <li>❌ Qualidade duvidosa</li>
                <li>❌ Sem exclusividade</li>
              </ul>
            </div>

            {/* Our Products */}
            <div className="text-center p-6 bg-gradient-card rounded-2xl">
              <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">😍</span>
              </div>
              <h4 className="text-xl font-kawaii font-bold text-primary mb-4">
                Imaginação é Arte
              </h4>
              <ul className="text-left space-y-2 text-foreground font-kawaii">
                <li>✨ Feito só para você</li>
                <li>✨ Com sua personalidade</li>
                <li>✨ Exatamente como sonhou</li>
                <li>✨ Qualidade garantida</li>
                <li>✨ Único no mundo</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg font-kawaii text-muted-foreground mb-6">
              A escolha é sua: comum ou extraordinário? 💫
            </p>
            <button
              className="btn-kawaii text-white hover:scale-105 transition-transform"
              onClick={() => {
                const element = document.getElementById("contatos");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Escolho Extraordinário!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiferencialSection;