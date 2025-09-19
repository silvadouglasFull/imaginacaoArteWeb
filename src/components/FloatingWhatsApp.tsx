import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "5519993507007"; // Replace with actual WhatsApp number

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Vi o site da Imaginação é Arte e gostaria de saber mais sobre os produtos personalizados! 💕"
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-floating hover:shadow-xl transition-all duration-300 hover:scale-110 pulse-glow group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-kawaii">
          Fale conosco no WhatsApp!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </button>

      {/* Notification Badge */}
      <div className="absolute -top-1 -left-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
        <span className="text-xs text-white font-bold">!</span>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;