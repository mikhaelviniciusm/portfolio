"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

// Barra fina de progresso de leitura no topo da viewport (GPU-acelerada via scaleX).
export function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 right-0 left-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-cyan)] to-[var(--accent-text)]"
    />
  );
}
