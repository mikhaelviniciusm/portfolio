import os from "node:os";
import type { NextConfig } from "next";

// Coleta dinamicamente todos os IPs IPv4 locais para liberar o acesso no celular/tablet via rede local
function getLocalNetworkOrigins(): string[] {
  const origins = new Set<string>(["localhost", "127.0.0.1"]);
  const interfaces = os.networkInterfaces();

  for (const entries of Object.values(interfaces)) {
    if (!entries) continue;
    for (const entry of entries) {
      if (entry.family === "IPv4" && !entry.internal) {
        origins.add(entry.address);
      }
    }
  }

  return Array.from(origins);
}

// Configuração otimizada para exportação estática (GitHub Pages / Vercel / Self-Hosted)
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: getLocalNetworkOrigins(),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
