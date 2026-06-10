import React from "react";

export default function DirectBookingBanner() {
  return (
    <section className="-mt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-zinc-50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-zinc-950 text-white rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl text-left border border-white/5">
          <div className="max-w-2xl">
            <span className="bg-primary/20 text-primary border border-primary/30 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
              🔥 Desconto Exclusivo
            </span>
            <h4 className="font-heading font-bold text-xl sm:text-2xl tracking-tight mb-1">
              Quer economizar nas taxas de serviços?
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              Fechando sua reserva direta conosco pelo WhatsApp, você evita as comissões de terceiros e garante um custo menor em relação às tarifas normais.
            </p>
          </div>
          <a
            href="https://wa.me/5513988219161?text=Ol%C3%A1!%20Estava%20olhando%20o%20site%20da%20Check-In%20Litoral%20e%20gostaria%20de%2520saber%20se%20consigo%20desconto%20fechando%2520direto%20com%20voc%C3%AAs%20pelo%20WhatsApp."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap bg-white hover:bg-zinc-100 text-zinc-950 py-3.5 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-black/30 hover:scale-[1.03]"
          >
            Garantir Desconto Direto
          </a>
        </div>
      </div>
    </section>
  );
}
