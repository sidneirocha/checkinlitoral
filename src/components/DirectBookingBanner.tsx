import React from "react";

type DirectBookingBannerProps = {
  embedded?: boolean;
  compact?: boolean;
};

export default function DirectBookingBanner({ embedded = false, compact = false }: DirectBookingBannerProps) {
  return (
    <section
      className={
        embedded
          ? "w-full h-full relative z-10"
          : "-mt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-zinc-50 relative z-10"
      }
    >
      <div className={embedded ? "max-w-7xl mx-auto h-full" : "max-w-7xl mx-auto"}>
        <div
          className={
            compact
              ? "bg-zinc-950 text-white rounded-3xl p-4 sm:p-6 min-h-[170px] sm:min-h-[190px] flex flex-col lg:flex-row items-center justify-between gap-4 shadow-2xl text-left border border-white/5"
              : "bg-zinc-950 text-white rounded-3xl p-6 sm:p-10 h-full flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl text-left border border-white/5"
          }
        >
          <div className={compact ? "max-w-2xl" : "max-w-2xl"}>
            <span className="bg-primary/20 text-primary border border-primary/30 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
              🔥 Desconto Exclusivo
            </span>
            <h4 className={compact ? "font-heading font-bold text-base sm:text-lg tracking-tight mb-1" : "font-heading font-bold text-xl sm:text-2xl tracking-tight mb-1"}>
              Quer economizar nas taxas de serviços?
            </h4>
            <p className={compact ? "text-zinc-400 text-[11px] sm:text-[12px] font-light leading-relaxed max-w-xl" : "text-zinc-400 text-xs sm:text-sm font-light leading-relaxed"}>
              Fechando sua reserva direta conosco pelo WhatsApp, você evita as comissões de terceiros e garante um custo menor em relação às tarifas normais.
            </p>
          </div>
          <a
            href="https://wa.me/5513988219161?text=Ol%C3%A1!%20Estava%20olhando%20o%20site%20da%20Checkin%20Litoral%20e%20gostaria%20de%2520saber%20se%20consigo%20desconto%20fechando%2520direto%20com%20voc%C3%AAs%20pelo%20WhatsApp."
            target="_blank"
            rel="noopener noreferrer"
            className={compact ? "whitespace-nowrap bg-white hover:bg-zinc-100 text-zinc-950 py-2.5 px-5 rounded-2xl font-bold text-[11px] uppercase tracking-wider transition-all shadow-xl shadow-black/30 hover:scale-[1.03]" : "whitespace-nowrap bg-white hover:bg-zinc-100 text-zinc-950 py-3.5 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-black/30 hover:scale-[1.03]"}
          >
            Garantir Desconto Direto
          </a>
        </div>
      </div>
    </section>
  );
}
