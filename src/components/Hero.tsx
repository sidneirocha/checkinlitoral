import React, { useState } from "react";

export default function Hero() {
  // Randomly select between the two provided premium beachfront orla views on page mount
  const [backgroundImage] = useState(() => {
    const images = [
      "https://raw.githubusercontent.com/sidneirocha/checkinlitoral_1/main/image1.webp",
      "https://raw.githubusercontent.com/sidneirocha/checkinlitoral_1/main/image2.webp"
    ];
    return images[Math.floor(Math.random() * images.length)];
  });

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-20 sm:py-28">
      {/* Imagem de fundo 100% limpa com brilho e nitidez totais para valorizar a orla de Santos */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Orla de Santos SP - Ponta da Praia"
          className="w-full h-full object-cover object-center opacity-100 brightness-95 transition-all duration-700 select-none"
          referrerPolicy="no-referrer"
        />
        {/* Soft, professional dark overlay to guarantee excellent text readability directly on the brand images */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Elegant light-to-transparent subtle bottom fade to smoothly merge into listings section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-50 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* Text floats completely free of any container boxes, perfectly readable */}
        <div className="text-center max-w-2xl mx-auto">
          
          {/* Main Title - Premium white and radiant gradient typography */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12] drop-shadow-lg">
            Seu próximo destino <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200">
              à beira-mar de Santos
            </span>
          </h1>

        </div>
      </div>
    </div>
  );
}
