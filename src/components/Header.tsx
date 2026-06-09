import React, { useState, useEffect } from "react";
import { MessageSquare, Menu, X, Landmark, Smartphone, Star } from "lucide-react";
import { LogoCheckin } from "./Logos";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Nossos Imóveis", href: "#imoveis" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Avaliações Google", href: "#avaliacoes" }
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-gray-100"
          : "bg-white/90 backdrop-blur border-b border-gray-150 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo brand */}
          <a href="#" className="flex items-center gap-2 group" aria-label="Check-In Litoral Logo">
            <LogoCheckin className="h-9 sm:h-11 w-auto transition-transform group-hover:scale-105 active:scale-95 duration-300" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-655 hover:text-primary transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social / Direct Action WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/5513988219161?text=Ol%C3%A1!%20Visitei%20o%20site%2520da%20Check-In%20Litoral%20e%20gostaria%2520de%20tirar%20algumas%20d%C3%BAvidas%20sobre%2520as%20loca%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md shadow-primary/20 hover:shadow-primary/30"
            >
              <MessageSquare className="w-4 h-4" />
              Reservar Agora
            </a>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-black transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drop menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl border-b border-gray-150 absolute top-[100%] left-0 w-full z-45 transform transition-all duration-300">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-150 flex flex-col gap-3 px-3">
              <a
                href="https://wa.me/5513988219161?text=Ol%C3%A1!%20Visitei%20o%20site%20da%20Check-In%20Litoral%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20as%20loca%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold text-base transition-colors shadow-lg"
              >
                <MessageSquare className="w-5 h-5" />
                Reservar Agora pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
