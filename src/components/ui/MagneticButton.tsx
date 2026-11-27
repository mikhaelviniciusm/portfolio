"use client";

import type { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

// Botão ou link com resposta tátil direta no clique e transição limpa de cor.
export function MagneticButton({
  children,
  className = "",
  href,
  target,
  rel,
  onClick,
  type = "button",
  ariaLabel,
}: MagneticButtonProps) {
  const interactiveClasses = `transition-colors duration-150 active:scale-[0.98] ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={interactiveClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={interactiveClasses}
    >
      {children}
    </button>
  );
}
