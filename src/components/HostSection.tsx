import React from "react";
import { GraduationCap, Award, MapPin, Shield, MessageSquare, Calendar } from "lucide-react";

export default function HostSection() {
  return (
    <section id="anfitriao" className="py-20 bg-white border-t border-zinc-150 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-900 tracking-tight mb-10 text-left">
          Conheça seu anfitrião
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
          {/* LEFT COLUMN: The Premium Airbnb Host Card & Bio */}
          <div className="lg:col-span-5 space-y-6">
            {/* The Floating White/Shadow Card */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-xl border border-zinc-150/80 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-between">
              
              {/* Aline's Portrait Side */}
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  {/* Photo of Aline - friendly & professional */}
                  <img
                    src="https://raw.githubusercontent.com/sidneirocha/checkinlitoral_1/main/avatar-aline.png"
                    alt="Aline - Anfitriã"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-md border border-zinc-100 bg-zinc-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Pink checkmark verified Superhost shield badge (Airbnb Official Style) */}
                  <div className="absolute bottom-0 right-0 bg-[#E81E61] text-white p-1.5 rounded-full border-2 border-white shadow-md flex items-center justify-center transform translate-x-1 translate-y-1">
                    <svg
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      className="w-3.5 h-3.5 fill-current"
                    >
                      <path d="M12.9 6.2a1 1 0 0 1 1.4-1.4l1.4 1.4a1 1 0 0 1 0 1.4l-7.1 7.1a1 1 0 0 1-1.4 0L3.1 10.6a1 1 0 0 1 1.4-1.4l3.4 3.4 5-5zM12.4 1.4a1 1 0 1 1 1.4 1.4l-11 11a1 1 0 1 1-1.4-1.4l11-11z" />
                    </svg>
                  </div>
                </div>

                {/* Name and Trophy Title */}
                <h3 className="font-heading font-extrabold text-2xl text-zinc-950 mt-3 leading-tight flex flex-col items-center">
                  Aline
                  <span className="text-zinc-500 text-xs font-semibold flex items-center gap-1 mt-1 font-mono uppercase tracking-wider">
                    🏆 Superhost
                  </span>
                </h3>
              </div>

              {/* Stats Box Side with Elegant Underline Dividers */}
              <div className="flex sm:flex-col justify-around sm:justify-start gap-4 sm:gap-6 w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-zinc-150/90 pt-4 sm:pt-0 sm:pl-8 text-center sm:text-left">
                {/* Stat 1 */}
                <div className="flex flex-col">
                  <span className="font-heading font-black text-xl sm:text-2xl text-zinc-950 leading-none">
                    57
                  </span>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide mt-1 leading-none">
                    avaliações
                  </span>
                </div>

                {/* Divider for mobile */}
                <div className="w-px bg-zinc-150 sm:hidden" />

                {/* Stat 2 */}
                <div className="flex flex-col">
                  <span className="font-heading font-black text-xl sm:text-2xl text-zinc-950 leading-none flex items-center justify-center sm:justify-start gap-0.5">
                    4,75<span className="text-sm">★</span>
                  </span>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide mt-1 leading-none">
                    estrelas
                  </span>
                </div>

                {/* Divider for mobile */}
                <div className="w-px bg-zinc-150 sm:hidden" />

                {/* Stat 3 */}
                <div className="flex flex-col">
                  <span className="font-heading font-black text-xl sm:text-2xl text-zinc-950 leading-none">
                    10
                  </span>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide mt-1 leading-none">
                    anos hospedando
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Bio Info Bullets */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 text-zinc-800">
                <Calendar className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-zinc-900 leading-snug">Nasci na década de 90</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-zinc-800">
                <GraduationCap className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-zinc-900 leading-snug">Onde estudei: Unimonte</p>
                </div>
              </div>
            </div>

            {/* Paragraph Biography precisely copied */}
            <p className="text-zinc-650 text-sm leading-relaxed pt-2 font-light">
              Sou formada em Turismo com várias especializações no setor hoteleiro. Experiência de oito anos em renomadas empresas do ramo e forte convívio com diversas culturas. Habitualmente realizo viagens nacionais para aprimorar conhecimentos no que diz respeito ao trade turístico.
            </p>
          </div>

          {/* RIGHT COLUMN: Contact Details & Hospitality Badges */}
          <div className="lg:col-span-7 space-y-8">
            {/* Superhost Detail Card */}
            <div>
              <h3 className="font-heading font-bold text-lg text-zinc-950 mb-2">
                Aline é Superhost
              </h3>
              <p className="text-sm text-zinc-650 leading-relaxed font-light">
                Superhosts são anfitriões experientes, com ótimas avaliações e que se empenham em oferecer estadias incríveis para os hóspedes.
              </p>
            </div>

            {/* Co-host list */}
            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-zinc-400 mb-4">
                Coanfitriões
              </h4>
              <div className="flex items-center gap-3">
                <img
                  src="https://raw.githubusercontent.com/sidneirocha/checkinlitoral_1/main/avatar-aline.png"
                  alt="Aline"
                  className="w-10 h-10 rounded-full object-cover border border-zinc-100 bg-zinc-100"
                  referrerPolicy="no-referrer"
                />
                <span className="text-sm font-semibold text-zinc-900">Aline</span>
              </div>
            </div>

            {/* Host Response Stats */}
            <div className="border-t border-zinc-150 pt-8">
              <h3 className="font-heading font-bold text-lg text-zinc-950 mb-4">
                Informações do anfitrião
              </h3>
              <ul className="space-y-2.5 text-sm text-zinc-650 font-light">
                <li className="flex items-center gap-2">
                  <span className="font-semibold text-zinc-900">Taxa de resposta:</span> 100%
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-semibold text-zinc-900">Responde em até:</span> 1 hora
                </li>
              </ul>
            </div>

            {/* CTA Option with WhatsApp Link */}
            <div className="pt-2">
              <a
                href="https://wa.me/5513988219161?text=Olá%20Aline,%20tenho%20interesse%20em%20saber%20mais%20sobre%20as%20reservas%20dos%20apartamentos."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-850 active:scale-98 text-white font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-2xl transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                Enviar mensagem ao anfitrião
              </a>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
}
