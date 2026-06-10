import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import ReviewsSection from "./components/ReviewsSection";
import HostSection from "./components/HostSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import PropertyCard from "./components/PropertyCard";
import { LISTA_IMOVEIS } from "./types";
import { Filter, Star, Info, HelpCircle, MapPin, Smile, Compass, AlertCircle } from "lucide-react";

export default function App() {
  const [imoveis, setImoveis] = useState(LISTA_IMOVEIS);

  // Shared state filters
  const [filtros, setFiltros] = useState({
    bairro: "Todos",
    hospedes: 1,
    precoMax: 900,
    checkIn: "",
    checkOut: ""
  });

  useEffect(() => {
    let active = true;
    const fetchImoveis = async () => {
      try {
        const res = await fetch("/api/imoveis", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (active && Array.isArray(data) && data.length > 0) {
            setImoveis(data);
          }
        }
      } catch (err) {
        console.error("Erro ao puxar imóveis dinâmicos do servidor:", err);
      }
    };
    fetchImoveis();
    return () => {
      active = false;
    };
  }, []);

  const handleFilterChange = (novosFiltros: {
    bairro: string;
    hospedes: number;
    precoMax: number;
    checkIn: string;
    checkOut: string;
  }) => {
    setFiltros(novosFiltros);
  };

  const handleReset = () => {
    setFiltros({
      bairro: "Todos",
      hospedes: 1,
      precoMax: 900,
      checkIn: "",
      checkOut: ""
    });
  };

  // Perform filtering calculations
  const imoveisFiltrados = imoveis.filter((imovel) => {
    // Neighborhood Filter
    if (filtros.bairro !== "Todos" && imovel.bairro !== filtros.bairro) {
      return false;
    }
    // Guests Capacity Filter
    if (imovel.maxHospedes < filtros.hospedes) {
      return false;
    }
    // Max price per night Filter
    if (imovel.precoPorNoite > filtros.precoMax) {
      return false;
    }
    // Date availability filter
    // If checkIn filter is set, ensure the check-In day isn't inside imovel's blocked dates
    if (filtros.checkIn && imovel.datasBloqueadas.includes(filtros.checkIn)) {
      return false;
    }
    // If checkOut filter is set, ensure checkout is not blocked
    if (filtros.checkOut && imovel.datasBloqueadas.includes(filtros.checkOut)) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans selection:bg-primary selection:text-white">
      {/* Sticky Header */}
      <Header />

      {/* Hero Search Section */}
      <Hero onFilterChange={handleFilterChange} filtrosAtuais={filtros} />

      {/* Main Properties Section */}
      <main id="imoveis" className="py-20 mt-20 sm:mt-24 lg:mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12 text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div>
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-primary font-mono mb-2 block">
              🏡 Seleção Checkin Litoral
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-900 tracking-tight">
              Os Melhores Imóveis para sua Estadia
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base mt-2 font-light max-w-2xl">
              Nossos 4 apartamentos destacados em Santos. Pé na areia ou muito próximos do mar, totalmente monitorados e equipados com infraestrutura premium.
            </p>
          </div>

          {/* Current Active Filtering Status Pill */}
          <motion.div
            className="bg-zinc-100 border border-zinc-200/60 rounded-full px-4 py-2 flex items-center gap-2.5 text-xs text-zinc-750 font-semibold shadow-sm shrink-0"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span>
              {imoveisFiltrados.length === 4
                ? "Exibindo os 4 Imóveis Disponíveis"
                : `Filtrado por: ${imoveisFiltrados.length} ${
                    imoveisFiltrados.length === 1 ? "Imóvel Encontrado" : "Imóveis Encontrados"
                  }`}
            </span>
            {(filtros.bairro !== "Todos" || filtros.hospedes > 1 || filtros.precoMax < 900) && (
              <button
                onClick={handleReset}
                className="text-primary hover:underline font-bold border-l border-zinc-200 pl-2.5 transition-all text-[11px]"
              >
                Limpar
              </button>
            )}
          </motion.div>
        </motion.div>

        {/* Properties Cards Loop Grid */}
        <AnimatePresence mode="popLayout">
          {imoveisFiltrados.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
            >
              {imoveisFiltrados.map((imovel) => (
                <motion.div
                  key={imovel.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98, y: 28 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <PropertyCard
                    imovel={imovel}
                    searchCheckIn={filtros.checkIn}
                    searchCheckOut={filtros.checkOut}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Warning / Filter Reset Fallback Box */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto border border-zinc-100 shadow-xl flex flex-col items-center justify-center dark:bg-zinc-900 border-zinc-200 text-left"
            >
              <div className="bg-orange-50 text-primary p-4 rounded-full mb-6">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-zinc-900 mb-2">
                Nenhum imóvel disponível para esses critérios!
              </h3>
              <p className="text-zinc-650 text-xs sm:text-sm font-light mb-6 leading-relaxed">
                Recomendamos flexibilizar suas diárias máximas, diminuir a quantidade de hóspedes solicitada ou remover os filtros para voltar a exibir nossos 4 apartamentos completos.
              </p>
              <button
                onClick={handleReset}
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-primary/20"
              >
                Remover Todos os Filtros
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Guide details "Como funciona" */}
      <HowItWorks />

      {/* Google Reviews Testimonial Carousel and feedback Form */}
      <ReviewsSection />

      {/* Meet Aline Host Section */}
      <HostSection />


      {/* Interactive Location Map before Footer */}
      <LocationSection />

      {/* Footer detailing */}
      <Footer />
    </div>
  );
}
