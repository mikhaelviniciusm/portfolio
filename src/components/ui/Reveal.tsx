"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Wrapper de animação suave ao rolar (GPU-acelerada) à prova de SSR e rolagem rápida no celular.
// Nunca emite opacity: 0 no HTML inicial e combina IntersectionObserver com fallback no evento scroll.
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Mantém visível tudo o que já está no viewport ou acima dele (evita piscadas)
    const initialRect = element.getBoundingClientRect();
    if (initialRect.top <= window.innerHeight - 20) {
      return;
    }

    element.classList.add("reveal-pending");

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      element.style.transitionDelay = `${Math.round(delay * 1000)}ms`;
      element.classList.remove("reveal-pending");
      element.classList.add("reveal-visible");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.top <= window.innerHeight) {
            reveal();
            cleanup();
            break;
          }
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -24px 0px" }
    );

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight + 40) {
        reveal();
        cleanup();
      }
    };

    function cleanup() {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    }

    observer.observe(element);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return cleanup;
  }, [delay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
