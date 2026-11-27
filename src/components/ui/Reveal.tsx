import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Container estrutural estável sem scroll-fade invasivo: garante leitura imediata
// em qualquer viewport e velocidade de rolagem.
export function Reveal({ children, className = "" }: RevealProps) {
  return <div className={className}>{children}</div>;
}
