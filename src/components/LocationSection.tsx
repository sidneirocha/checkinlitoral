import React from "react";
import { MapPin, Compass, Navigation, ExternalLink, Coffee, ShoppingBag, Utensils, Anchor } from "lucide-react";

export default function LocationSection() {
  const gmapsLink = "https://www.google.com/maps/place/epitacio+pessoa+580/@-23.9830993,-46.3073274,3a,75y,238.77h,90t/data=!3m4!1e1!3m2!1sPV7S4GmJ9LXhfVD_Q1SYNQ!2e0!4m2!3m1!1s0x94ce0241a8e06997:0x3b29c4f6aa64702e?sa=X&ved=1t:3780&ictx=111";

  const localPoints = [
    {
      icon: <Anchor className="w-4 h-4 text-primary" />,
      titulo: "Orla da Praia & Canal 6",
      desc: "Literalmente a poucos passos (menos de 50 metros)."
    },
    {
      icon: <Utensils className="w-4 h-4 text-primary" />,
      titulo: "Gastronomia",
      desc: "Próximo aos melhores restaurantes, pizzarias e quiosques refinados de Santos."
    },
    {
      icon: <Coffee className="w-4 h-4 text-primary" />,
      titulo: "Padarias & Cafés",
      desc: "Padarias conceituadas com café da manhã completo e conveniências."
    },
    {
      icon: <ShoppingBag className="w-4 h-4 text-primary" />,
      titulo: "Supermercados & Farmácias",
      desc: "Infraestrutura completa de comércio para abastecer sua estadia com comodidade."
    }
  ];

  return (
    <section id="localizacao" className="py-20 bg-zinc-50 border-t border-zinc-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-primary font-mono mb-2 block">
            📍 Localização Estratégica
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-950 tracking-tight">
            Onde Estamos Localizados?
          </h2>
          <p className="text-zinc-650 text-sm sm:text-base mt-2 font-light max-w-2xl">
            Nossos apartamentos estão localizados no privilegiado <strong>Edifício Milão</strong>, bem na divisa da Ponta da Praia com o Canal 6. O bairro é sinônimo de segurança, bem-estar e tranquilidade em Santos.
          </p>
        </div>

        {/* Info + Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address Card & Points of Interest */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            
            {/* Main Address Card with beautiful subtle orange background frame */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/80 shadow-md relative overflow-hidden flex-1">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-50 p-2.5 rounded-xl text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-zinc-900 text-sm uppercase tracking-wider mb-1">
                    Endereço Oficial
                  </h4>
                  <p className="text-zinc-950 font-bold text-md leading-snug">
                    Av. Dr. Epitácio Pessoa, 580
                  </p>
                  <p className="text-zinc-550 text-xs font-light">
                    Ponta da Praia • Santos - SP
                  </p>
                  <p className="text-zinc-400 text-[11px] font-light mt-1">
                    CEP 11030-600 • Na Quadra da Praia
                  </p>
                </div>
              </div>

              <div className="border-t border-zinc-100 pt-6">
                <h5 className="font-heading font-semibold text-zinc-800 text-xs uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-primary" /> Conveniências ao Redor
                </h5>
                
                <div className="space-y-4">
                  {localPoints.map((p, idx) => (
                    <div key={idx} className="flex gap-3 text-left">
                      <div className="bg-zinc-50 w-8 h-8 rounded-lg flex items-center justify-center border border-zinc-150 shrink-0 mt-0.5">
                        {p.icon}
                      </div>
                      <div>
                        <h6 className="font-heading font-bold text-[12px] text-zinc-900">
                          {p.titulo}
                        </h6>
                        <p className="text-zinc-500 text-[11px] leading-relaxed font-light">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA to get directions */}
            <div className="bg-zinc-950 text-white rounded-2xl p-5 border border-white/5 shadow-lg flex flex-col sm:flex-row lg:flex-col justify-between items-start sm:items-center lg:items-start gap-4">
              <div>
                <h5 className="font-heading font-semibold text-xs text-orange-200 uppercase tracking-widest mb-1">
                  🎒 Trace a sua Rota
                </h5>
                <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                  Quer ver o ponto exato da orla de Santos no Street View? Abra no Google Maps.
                </p>
              </div>
              <a
                href={gmapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap flex items-center gap-1.5 bg-primary hover:bg-primary-hover text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-all shadow-md shrink-0 cursor-pointer text-center w-full sm:w-auto lg:w-full justify-center"
              >
                <Navigation className="w-3.5 h-3.5 fill-current" />
                <span>Como chegar • Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Iframe */}
          <div className="lg:col-span-8 bg-zinc-150 rounded-3xl overflow-hidden border border-zinc-200/80 shadow-lg min-h-[350px] lg:min-h-[450px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.006963174249!2d-46.309516100000005!3d-23.9830993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce0241a8e06997%3A0x3b29c4f6aa64702e!2sAv.%20Dr.%20Epit%C3%A1cio%20Pessoa%2C%20580%20-%20Ponta%20da%20Praia%2C%20Santos%20-%20SP%2C%2011030-600!5e0!3m2!1spt-BR!2sbr!4v1717904000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full"
              title="Endereço Dr. Epitácio Pessoa 580 Santos SP Edifício Milão"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
