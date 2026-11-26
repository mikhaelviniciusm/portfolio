"use client";

// Fundo atmosférico animado GPU-acelerado (apenas transform/opacity) para Dark e Light Mode.
export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* Grade técnica sutil com máscara radial */}
      <div className="ambient-grid absolute inset-0 opacity-60 dark:opacity-45" />

      {/* Orbe primário — Azul Elétrico */}
      <div className="ambient-orb ambient-orb-primary" />

      {/* Orbe secundário — Ciano */}
      <div className="ambient-orb ambient-orb-secondary" />

      {/* Orbe terciário — Profundidade inferior */}
      <div className="ambient-orb ambient-orb-tertiary" />
    </div>
  );
}
