import React from "react";

type BrandLogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function BrandLogo({ className = "h-10 w-auto", variant = "light" }: BrandLogoProps) {
  const src = variant === "dark" ? "/logo-fundo-escuro.svg" : "/logo-fundo-claro.svg";

  return (
    <img
      src={src}
      alt="Checkin Litoral"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
