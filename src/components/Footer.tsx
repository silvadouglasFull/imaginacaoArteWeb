import smLogo from "@/assets/sm-logo.png";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-foreground to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img
              src={smLogo}
              alt="Imaginação é Arte"
              className="w-16 h-16 object-contain mr-3"
            />
            <h3 className="text-2xl font-kawaii font-bold">Imaginação é Arte</h3>
          </div>
          <p className="text-white/80 font-kawaii max-w-md mx-auto">
            Transformando sonhos em papelaria personalizada desde sempre ✨
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-8"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-white/70 font-kawaii text-sm">
              © {currentYear} Imaginação é Arte
            </p>
            <p className="text-white/70 font-kawaii text-sm">
              Todos os direitos reservados
            </p>
          </div>

          {/* Made with Love */}
          <div className="text-center">
            <p className="flex items-center justify-center text-white/80 font-kawaii text-sm">
              Feito com
              <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" />
              para você
            </p>
          </div>

          {/* Developer Credit */}
          <div className="text-center md:text-right">
            <a
              href="https://www.instagram.com/dswebdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white font-kawaii text-sm transition-colors duration-300 hover:underline"
            >
              Desenvolvido por Ds Web
            </a>
          </div>
        </div>

        {/* Trust Seals Placeholder */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-xs font-kawaii">🔒 Pagamento Seguro</span>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-xs font-kawaii">📦 Entrega Nacional</span>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-xs font-kawaii">💯 Qualidade Garantida</span>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-xs font-kawaii">✨ 100% Personalizado</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;