import React from "react";
import { Search, CalendarDays, Key } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      titulo: "1. Escolha o Imóvel Ideal",
      descricao: "Navegue pela nossa seleção premium de 4 apartamentos situados no mais nobre e seguro bairro de Santos: Ponta da Praia (Edifício Milão)."
    },
    {
      icon: <CalendarDays className="w-6 h-6 text-primary" />,
      titulo: "2. Verifique Valores & Datas",
      descricao: "Consulte o calendário oficial do Airbnb para verificar as datas e calcular os valores com total transparência. Você pode seguir com a reserva pelo Airbnb ou concluir direto pelo WhatsApp."
    },
    {
      icon: <Key className="w-6 h-6 text-primary" />,
      titulo: "3. Confirme & Faça Check-In",
      descricao: "Com apenas um clique, entre em contato direto pelo WhatsApp. Cuidamos de todo o processo burocrático e disponibilizamos suporte 24h para sua segurança."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-gradient-to-br from-primary via-[#EA5520] to-[#E04410] border-t border-b border-orange-600 relative overflow-hidden">
      {/* Visual background bubbles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Title */}
        <span className="text-[11px] font-bold tracking-[3px] uppercase text-orange-200 font-mono mb-2 block">
          📋 Passo a Passo
        </span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 text-white">
          Como funciona a sua locação?
        </h2>
        <p className="text-orange-50 text-sm sm:text-base max-w-2xl mx-auto mb-16 font-light">
          Simplicidade, agilidade e total transparência. Sem intermediários, sem tarifas extras de portais e com atendimento personalizado.
        </p>

        {/* 3 Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all relative text-left border border-white/20 transform hover:-translate-y-1 duration-300"
            >
              {/* Step indicator balloon */}
              <div className="absolute top-5 right-5 font-heading font-black text-5xl text-zinc-300 drop-shadow-sm leading-none tracking-wider select-none">
                0{index + 1}
              </div>

              <div className="bg-orange-50 w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner mb-6">
                {step.icon}
              </div>

              <h3 className="font-heading font-bold text-lg text-zinc-900 mb-2">
                {step.titulo}
              </h3>
              <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed font-light">
                {step.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
