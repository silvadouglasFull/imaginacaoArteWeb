import slide2 from "@/assets/slide2.jpg";
import slide3 from "@/assets/slide3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 2,
    image: slide2,
    title: "Papelaria que encanta",
    subtitle: "Cadernos, agendas e muito mais, tudo do jeitinho que você imaginar",
    hasImage: true
  },
  {
    id: 3,
    image: slide3,
    title: "Feito especialmente para você",
    subtitle: "Cada peça é única, criada com carinho e atenção aos detalhes",
    hasImage: true
  },
  {
    id: 4,
    title: "Você imagina",
    subtitle: "a gente cria",
    hasImage: false
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            {slide.hasImage ? (
              // Image slides
              <div className="relative h-full w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover opacity-9"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-kawaii font-bold mb-4 text-gradient animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-kawaii font-medium animate-fade-in">
                      {slide.subtitle}
                    </p>
                    <button
                      className="mt-8 btn-kawaii text-white hover:scale-105 transition-transform"
                      onClick={() => {
                        const element = document.getElementById("contatos");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Fale Conosco
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Text-only slide
              <div className="h-full w-full bg-gradient-hero flex items-center justify-center">
                <div className="text-center px-4 max-w-4xl mx-auto">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-kawaii font-bold text-white mb-4 float-animation">
                    {slide.title}
                  </h1>
                  <p className="text-4xl md:text-6xl lg:text-7xl font-kawaii font-bold text-white pulse-glow">
                    {slide.subtitle}
                  </p>
                  <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      className="btn-kawaii text-white"
                      onClick={() => {
                        const element = document.getElementById("ideias");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Ver Nossas Criações
                    </button>
                    <button
                      className="btn-whatsapp rounded-full px-8 py-4 font-semibold transition-all duration-300"
                      onClick={() => {
                        const element = document.getElementById("contatos");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Fale no WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? "bg-white scale-125"
              : "bg-white/50 hover:bg-white/75"
              }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;