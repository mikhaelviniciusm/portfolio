"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  strength?: number;
}

// Botão ou link com micro-interação magnética sutil para dispositivos com mouse.
export function MagneticButton({
  children,
  className = "",
  href,
  target,
  rel,
  onClick,
  type = "button",
  ariaLabel,
  strength = 0.16,
}: MagneticButtonProps) {
  const elementRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 280, damping: 20, mass: 0.25 });
  const y = useSpring(rawY, { stiffness: 280, damping: 20, mass: 0.25 });

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (prefersReducedMotion || event.pointerType !== "mouse") return;
    const el = elementRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);

    // Limita o deslocamento a no máximo ±6px para manter precisão de clique
    const clampedX = Math.max(-6, Math.min(6, offsetX * strength));
    const clampedY = Math.max(-6, Math.min(6, offsetY * strength));
    rawX.set(clampedX);
    rawY.set(clampedY);
  };

  const resetPosition = () => {
    rawX.set(0);
    rawY.set(0);
  };

  if (href) {
    return (
      <motion.a
        ref={elementRef}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        style={prefersReducedMotion ? undefined : { x, y }}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPosition}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
        className={className}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={elementRef}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      style={prefersReducedMotion ? undefined : { x, y }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
