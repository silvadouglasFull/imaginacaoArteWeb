import galleryArt from "@/assets/gallery-art-sketchbook.jpg";
import galleryCat from "@/assets/gallery-cat-kit.jpg";
import galleryFloral from "@/assets/gallery-floral-agenda.jpg";
import galleryRainbow from "@/assets/gallery-rainbow-planner.jpg";
import galleryStickers from "@/assets/gallery-stickers.jpg";
import galleryUnicorn from "@/assets/gallery-unicorn-notebook.jpg";
import { useState } from "react";

const IdeiasSection = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Gallery items with generated images
  const galleryItems = [
    {
      id: 1,
      title: "Caderno Kawaii Unicórnio",
      description: "Perfeito para anotações mágicas e sonhos coloridos",
      image: galleryUnicorn
    },
    {
      id: 2,
      title: "Agenda Floral Delicada",
      description: "Organize seus dias com muito charme e delicadeza",
      image: galleryFloral
    },
    {
      id: 3,
      title: "Kit Escolar Gatinhos",
      description: "Lápis, borrachas e adesivos com temática felina",
      image: galleryCat
    },
    {
      id: 4,
      title: "Planner Semanal Arco-íris",
      description: "Planeje sua semana com cores vibrantes e alegria",
      image: galleryRainbow
    },
    {
      id: 5,
      title: "Caderno de Desenho Artístico",
      description: "Para liberar toda sua criatividade e talento",
      image: galleryArt
    },
    {
      id: 6,
      title: "Conjunto Adesivos Fofos",
      description: "Centenas de adesivos para personalizar tudo",
      image: galleryStickers
    }
  ];

  return (
    <section id="ideias" className="py-20 bg-gradient-to-br from-kawaii-peach/10 to-kawaii-pink/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-kawaii font-bold text-gradient mb-4">
            Nossas Criações
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-kawaii">
            Cada peça é única e feita com muito amor. Inspire-se e crie a sua!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="card-kawaii group cursor-pointer"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  <span className="text-white font-kawaii font-semibold"></span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-kawaii font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-kawaii">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="btn-kawaii text-white hover:scale-105 transition-transform"
            onClick={() => {
              const element = document.getElementById("contatos");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Quero Criar o Meu
          </button>
        </div>
      </div>
    </section>
  );
};

export default IdeiasSection;