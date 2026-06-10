import React, { useState } from "react";
import { motion } from "motion/react";
import DirectBookingBanner from "./DirectBookingBanner";

export default function Hero() {
  // Randomly select between the two provided premium beachfront orla views on page mount
  const [backgroundImage] = useState(() => {
    const images = [
      "https://raw.githubusercontent.com/sidneirocha/checkinlitoral_1/main/image1.webp",
      "https://raw.githubusercontent.com/sidneirocha/checkinlitoral_1/main/image2.webp"
    ];
    return images[Math.floor(Math.random() * images.length)];
  });

  const [heroPhrase] = useState(() => {
    const phrases = [
      "Hospedagem na praia com o clima de Santos que você procura",
      "Seu refúgio pé na areia para curtir Santos com tranquilidade",
      "Conforto, mar e praticidade para sua estadia em Santos",
      "A experiência certa de hospedagem na orla de Santos",
      "Dias leves e bem aproveitados na praia de Santos"
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
  });

  return (
    <section className="relative overflow-visible pb-24 sm:pb-32 lg:pb-40">
      {/* Imagem de fundo 100% limpa com brilho e nitidez totais para valorizar a orla de Santos */}
      <div className="absolute inset-0 z-0 min-h-[92vh] overflow-hidden">
        <motion.img
          src={backgroundImage}
          alt="Orla de Santos SP - Ponta da Praia"
          className="w-full h-full object-cover object-center opacity-100 brightness-95 transition-all duration-700 select-none"
          referrerPolicy="no-referrer"
          animate={{
            scale: [1, 1.05, 1.02, 1],
            x: [0, 10, -6, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Soft, professional dark overlay to guarantee excellent text readability directly on the brand images */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative min-h-[92vh] flex items-center justify-center py-20 sm:py-28 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Text floats completely free of any container boxes, perfectly readable */}
          <div className="text-center max-w-2xl mx-auto">
          
            {/* Main Title - Premium white and radiant gradient typography */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12] drop-shadow-lg">
              {heroPhrase}
            </h1>

          </div>
        </div>
      </div>

      <div className="absolute left-1/2 bottom-0 z-20 w-full max-w-[1216px] -translate-x-1/2 translate-y-1/2 px-4 sm:px-6 lg:px-8">
        <DirectBookingBanner embedded compact />
      </div>
    </section>
  );
}
