import React from "react";
import { MapPin, Phone, Mail, Building, ArrowUp, MessageSquare, ShieldCheck, Heart } from "lucide-react";
import { LogoBranco } from "./Logos";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-8 border-t border-zinc-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-left">
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center">
              <LogoBranco className="h-10 w-auto" />
            </div>
            <p className="text-sm font-light leading-relaxed text-zinc-400">
              Sua melhor experiência em locação por temporada na Ponta da Praia, Santos/SP. Conforto, segurança e suporte personalizado para sua estadia perfeita.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <a href="#imoveis" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  🏢 Imóveis Detalhados
                </a>
              </li>
              <li>
                <a href="#anfitria" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  👩‍💼 Anfitriã
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  📍 Localização
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  ⭐ Avaliações dos Clientes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Properties list links */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider">
              Nossos Apartamentos
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <a href="#card-14043076" className="hover:text-primary transition-colors flex items-center gap-1">
                  ✨ Kitnet 9º Andar (Ed. Milão)
                </a>
              </li>
              <li>
                <a href="#card-14834054" className="hover:text-primary transition-colors flex items-center gap-1">
                  🛋️ Kitnet 4º Andar (Ed. Milão)
                </a>
              </li>
              <li>
                <a href="#card-40831273" className="hover:text-primary transition-colors flex items-center gap-1">
                  🌊 Kitnet 3º Andar (Ed. Milão)
                </a>
              </li>
              <li>
                <a href="#card-649905667489960100" className="hover:text-primary transition-colors flex items-center gap-1">
                  💎 Sala Living 3º Andar (Ed. Milão)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider">
              Fale Conosco
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed text-zinc-400">
                  Avenida Bartolomeu de Gusmão, 150 (Canal 6)<br />
                  Ponta da Praia, Santos - SP<br />
                  Edifício Milão - Na quadra da praia.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="https://wa.me/5513988219161" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-semibold text-white">
                  (13) 98821-9161
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider and bottom rights */}
        <div className="border-t border-zinc-850 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-zinc-500">
          <p className="tracking-wide">
            © 2026 Checkin Litoral. Todos os direitos reservados e Desenvolvido por{" "}
            <a
              href="https://haus.art.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white font-bold hover:underline transition-colors"
            >
              haus.art.br
            </a>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold px-4 py-2 rounded-xl transition-all border border-zinc-850 hover:text-primary cursor-pointer"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Voltar ao topo</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
