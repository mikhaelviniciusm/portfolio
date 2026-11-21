"use client";

import type { MouseEvent, ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}

// Card com spotlight sutil que acompanha o ponteiro via variáveis CSS sem re-renders React.
export function SpotlightCard({
  children,
  className = "",
  as = "div",
}: SpotlightCardProps) {
  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const Component = as;

  return (
    <Component
      onMouseMove={handleMouseMove}
      className={`spotlight-card rounded-xl ${className}`}
    >
      {children}
    </Component>
  );
}
