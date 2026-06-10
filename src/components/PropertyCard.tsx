import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Imovel } from "../types";
import {
  Wifi,
  Wind,
  Car,
  Compass,
  Flame,
  Star,
  Users,
  Bed,
  Bath,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Info
} from "lucide-react";

interface PropertyCardProps {
  imovel: Imovel;
  searchCheckIn?: string;
  searchCheckOut?: string;
}

export default function PropertyCard({ imovel, searchCheckIn, searchCheckOut }: PropertyCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const showArCondicionado = imovel.arCondicionado && imovel.id !== "14834054";
  
  // Filter out any potential host portrait images (e.g. user profiles, avatars)
  const imagensValidas = imovel.imagensGaleria.filter((img) => {
    if (!img) return false;
    const lower = img.toLowerCase();
    const isHostPortrait = (lower.includes("host") && !lower.includes("hosting")) || lower.includes("co-host");
    return (
      !lower.includes("/user/") &&
      !lower.includes("user_profile") &&
      !lower.includes("profile_photos") &&
      !lower.includes("profile") &&
      !lower.includes("aline") &&
      !lower.includes("avatar") &&
      !isHostPortrait &&
      !lower.includes("guest")
    );
  });
  
  // Autoplay of image gallery with smooth loop
  useEffect(() => {
    if (imagensValidas.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev === imagensValidas.length - 1 ? 0 : prev + 1));
    }, 4500); // 4.5 seconds for perfect reading and viewing pacing
    return () => clearInterval(interval);
  }, [imagensValidas]);
  
  // Navigate images
  const handleNavImage = (direction: "left" | "right", e: React.MouseEvent) => {
    e.stopPropagation();
    if (direction === "left") {
      setActiveImageIndex((prev) => (prev === 0 ? imagensValidas.length - 1 : prev - 1));
    } else {
      setActiveImageIndex((prev) => (prev === imagensValidas.length - 1 ? 0 : prev + 1));
    }
  };

  // Prefilled WhatsApp text block
  const getWhatsAppLink = () => {
    const hostNumber = "5513988219161";
    const text = `Olá, Checkin Litoral! Tudo bem?\n\nTenho interesse em realizar uma reserva no *${imovel.titulo}*.\n\nVi o imóvel no site e gostaria de saber as datas disponíveis e tarifas. Como posso prosseguir com a locação?`;
    return `https://wa.me/${hostNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      id={`card-${imovel.id}`}
      className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-zinc-100 transition-all duration-300 flex flex-col group h-full"
    >
      {/* 1. Header de Imagem com Carrossel */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-200">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={activeImageIndex}
            src={imagensValidas[activeImageIndex] || imovel.imagemCapa}
            alt={`${imovel.titulo} - Foto ${activeImageIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        {/* Gradiente escuro superior e inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />

        {/* Navegação de Fotos */}
        <button
          onClick={(e) => handleNavImage("left", e)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-primary transition-all cursor-pointer backdrop-blur-sm shadow hover:scale-110 active:scale-95"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => handleNavImage("right", e)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-primary transition-all cursor-pointer backdrop-blur-sm shadow hover:scale-110 active:scale-95"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Indicadores de fotos */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
          {imagensValidas.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeImageIndex === idx ? "w-4 bg-primary" : "w-1.5 bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Badges Flutuantes */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5">
          <span className="bg-primary text-white text-[10px] sm:text-xs font-bold leading-none px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md shadow-primary/20 uppercase tracking-wider">
            ⚡ {imovel.distanciaPraia}
          </span>

        </div>

        {/* Avaliação Google */}
        <div className="absolute top-4 right-4 bg-white/95 px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-md text-xs font-bold text-gray-800 backdrop-blur-sm">
          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
          <span>{imovel.avaliacoesGoogle.toFixed(1)}</span>
          <span className="text-gray-400 font-normal">({imovel.totalAvaliacoes})</span>
        </div>
      </div>

      {/* 2. Conteúdo do Imóvel */}
      <div className="p-6 flex flex-col flex-grow text-left">
        {/* Bairro link */}
        <div className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-1.5 font-heading">
          <Compass className="w-3.5 h-3.5" />
          <span>Santos, SP • {imovel.bairro}</span>
        </div>

        {/* Título */}
        <h3 className="font-heading font-bold text-xl text-gray-900 group-hover:text-primary transition-colors tracking-tight leading-snug mb-2">
          {imovel.titulo}
        </h3>

        <div className="flex items-center gap-2 flex-wrap mb-3">
          <div className="inline-flex items-center gap-1.5 bg-[#FF385C]/10 text-[#FF385C] px-3 py-1.5 rounded-full text-[11px] font-extrabold tracking-wider uppercase">
            <span>Superhost</span>
          </div>
        </div>

        {/* Descrição Curta */}
        <p className="text-sm text-gray-600 line-clamp-2 h-10 mb-4 font-light">
          {imovel.descricaoCurta}
        </p>

        {/* Características Rápidas Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 py-3 border-y border-zinc-100 mb-4 text-xs font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-gray-400" />
            <span>{imovel.quartos} {imovel.quartos === 1 ? "Quarto" : "Quartos"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-gray-400" />
            <span>{imovel.banheiros} {imovel.banheiros === 1 ? "Banheiro" : "Banheiros"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-400" />
            <span>Até {imovel.maxHospedes} Hóspedes</span>
          </div>
          <div className="flex items-center gap-2">
            <Car className="w-4 h-4 text-gray-400" />
            <span>{imovel.vagaGaragem ? "Garagem coletiva" : "Sem Vaga"}</span>
          </div>
        </div>

        {/* Comodidades Extras */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {showArCondicionado && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-zinc-100 text-zinc-700">
              <Wind className="w-3 h-3 text-zinc-500" /> Ar-Condicionado
            </span>
          )}
          {imovel.wiFi && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-zinc-100 text-zinc-700">
              <Wifi className="w-3 h-3 text-zinc-500" /> Wi-Fi 500MB
            </span>
          )}
          {imovel.churrasqueira && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-orange-50 text-primary">
              <Flame className="w-3 h-3 text-primary" /> Churrasqueira
            </span>
          )}
          {imovel.petFriendly && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-zinc-100 text-zinc-700">
              🐾 Pet Friendly
            </span>
          )}
        </div>

        {/* Botão para Mostrar Descrição Completa */}
        {showDetails && (
          <div className="mb-5 text-xs text-gray-600 bg-zinc-50 rounded-2xl p-4 border border-zinc-100 leading-relaxed font-light transition-all">
            <p className="font-bold text-gray-800 mb-1 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-primary" /> Descrição do Espaço:
            </p>
            {imovel.descricaoCompleta}
          </div>
        )}

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-xs text-primary hover:text-primary-hover font-bold hover:underline mb-6 text-left self-start cursor-pointer"
        >
          {showDetails ? "▲ Ocultar detalhes completos" : "▼ Ver descrição detalhada"}
        </button>

        {/* Diária e CTAs */}
        <div className="mt-auto border-t border-zinc-100 pt-5 font-heading">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* CTA 1: Airbnb link */}
            <a
              href={imovel.linkAirbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF385C] hover:bg-[#E61E4D] text-white py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5 shadow-md shadow-[#FF385C]/10 text-center min-h-[3rem]"
            >
              Ver no Airbnb
            </a>

            {/* CTA 2: WhatsApp link */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer transform hover:-translate-y-0.5 shadow-md shadow-emerald-600/15"
            >
              <MessageSquare className="w-4 h-4" />
              Reservar WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
