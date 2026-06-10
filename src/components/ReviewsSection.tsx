import React, { useState, useEffect } from "react";
import { GOOGLE_REVIEWS } from "../types";
import { Star } from "lucide-react";
import { LogoGoogle } from "./Logos";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<any[]>(() => {
    // Load local custom reviews from localStorage if available
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("checkin_litoral_custom_reviews");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            return [...parsed, ...GOOGLE_REVIEWS];
          }
        } catch (e) {
          console.error("Erro ao carregar avaliações locais de localStorage:", e);
        }
      }
    }
    return GOOGLE_REVIEWS;
  });

  const [mediaAvaliacoes, setMediaAvaliacoes] = useState(5.0);
  const [totalAvaliacoes, setTotalAvaliacoes] = useState(150);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let active = true;
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/reviews");
        if (response.ok) {
          const data = await response.json();
          if (active) {
            // Merge custom reviews from local storage over real ones
            let customLocal: any[] = [];
            if (typeof window !== "undefined") {
              const saved = localStorage.getItem("checkin_litoral_custom_reviews");
              if (saved) {
                try {
                  customLocal = JSON.parse(saved);
                } catch (e) {}
              }
            }
            const remoteAvaliacoes = data.avaliacoes || GOOGLE_REVIEWS;
            setReviews([...customLocal, ...remoteAvaliacoes]);
            if (data.mediaAvaliacoes) setMediaAvaliacoes(data.mediaAvaliacoes);
            if (data.totalAvaliacoes) setTotalAvaliacoes(data.totalAvaliacoes);
          }
        }
      } catch (err) {
        console.error("Erro ao carregar avaliações reais:", err);
      } finally {
        if (active) setIsLoading(false);
      }
    };
    fetchReviews();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="avaliacoes" className="py-20 bg-zinc-50 border-t border-zinc-100 relative overflow-hidden">
      {/* Background visual touches */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        {/* Title */}
        <span className="text-[11px] font-bold tracking-[3px] uppercase text-primary font-mono mb-2 block">
          ⭐ Experiência dos Hóspedes
        </span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 text-zinc-900">
          Quem se hospeda, <span className="text-primary">recomenda!</span>
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto mb-16 font-light">
          Nossa equipe trabalha dia e noite para entregar excelência em Santos. Veja as avaliações vindas diretamente do nosso perfil do Google.
        </p>

        {/* Google Reviews Dashboard Grid */}
        <div className="grid grid-cols-1 gap-8 items-start text-left mb-16">
          {/* Dashboard Left Side */}
          <div className="bg-white border border-gray-200/85 rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center justify-center shadow-sm max-w-xl mx-auto w-full">
            {/* Google Logo representation */}
            <div className="flex items-center gap-2 mb-3 bg-zinc-50 border border-zinc-150 px-3.5 py-1.5 rounded-full shadow-inner">
              <LogoGoogle className="w-5 h-5 shrink-0" />
              <span className="font-heading font-extrabold text-[11px] tracking-[2px] uppercase text-zinc-700">
                Google Reviews
              </span>
            </div>

            <div className="font-heading font-black text-6xl text-zinc-900 mb-2 tracking-tight">
              {mediaAvaliacoes.toFixed(1)}
            </div>

            {/* Stars rendering */}
            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star 
                  key={s} 
                  className={`w-5 h-5 ${
                    s <= Math.round(mediaAvaliacoes) 
                      ? "fill-yellow-400 text-yellow-400" 
                      : "text-zinc-200 fill-zinc-200"
                  }`} 
                />
              ))}
            </div>

            <p className="text-xs text-zinc-500 font-semibold tracking-wide uppercase mb-4">
              Média baseada em {totalAvaliacoes} avaliações reais
            </p>

            <div className="w-full border-t border-zinc-250 pt-6">
              <p className="text-xs text-zinc-650 font-light leading-relaxed mb-6">
                Teve uma estadia agradável conosco em Santos? Contribua para que continuemos melhorando nossos serviços!
              </p>

              {/* Botão de Incentivo Oficial */}
              <a
                href="https://g.page/r/CXJfDvMxVvuOEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white py-3.5 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-primary/20 transform hover:-translate-y-0.5"
              >
                Avaliar no Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
