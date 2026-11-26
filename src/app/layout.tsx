import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://mikhael.is-a.dev";
const siteTitle = "Mikhael Vinícius — Desenvolvedor Full-Stack & iOS | Infraestrutura e Sistemas SAP";
const siteDescription =
  "Portfólio e currículo de Mikhael Vinícius: Desenvolvedor Full-Stack & iOS (SwiftUI), Monitor de Sistemas SAP na DK Systems, automação CI/CD, integrações fiscais SEFAZ e infraestrutura self-hosted em Linux e Docker.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Mikhael Vinícius",
    "Mikhael Vinicius",
    "Desenvolvedor Full-Stack",
    "Desenvolvedor iOS",
    "SwiftUI",
    "Monitor de Sistemas SAP",
    "DK Systems",
    "DevOps",
    "Docker",
    "Self-Hosted",
    "Next.js",
    "TypeScript",
    "SEFAZ",
    "CT-e",
    "MDF-e",
    "Ceará",
  ],
  authors: [{ name: "Mikhael Vinícius", url: siteUrl }],
  creator: "Mikhael Vinícius",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "mikhael.dev — Portfólio de Mikhael Vinícius",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
};

// Script mínimo inline para aplicar o tema salvo antes da primeira pintura (evita FOUC)
const themeInitScript = `
(function () {
  try {
    var savedTheme = localStorage.getItem("portfolio-theme");
    var root = document.documentElement;
    var isLight = savedTheme === "light";
    if (isLight) {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    } else {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", isLight ? "#f8fafc" : "#0a0a0f");
    }
  } catch (e) {
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
  }
})();
`;

// Dados estruturados Schema.org (Person) para indexação semântica em mecanismos de busca
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mikhael Vinícius",
  alternateName: "Mikhael Vinicius Martins de Lima",
  jobTitle:
    "Desenvolvedor Full-Stack & iOS | Monitor de Sistemas SAP e Especialista em Infraestrutura",
  description: siteDescription,
  url: siteUrl,
  email: "mailto:email@mikhael.dev.br",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Maracanaú",
    addressRegion: "CE",
    addressCountry: "BR",
  },
  worksFor: {
    "@type": "Organization",
    name: "DK Systems",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidade Christus (Unichristus)",
  },
  knowsLanguage: ["Português", "Inglês (C1 Avançado)"],
  knowsAbout: [
    "Swift",
    "SwiftUI",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "Docker",
    "Linux",
    "GitHub Actions",
    "Cloudflare Tunnels",
    "Monitoramento SAP",
    "Integrações Fiscais SEFAZ",
  ],
  sameAs: [
    "https://github.com/mikhaelviniciusm",
    "https://br.linkedin.com/in/mikhaelvinicius",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${plusJakartaSans.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased selection:bg-blue-500/25 selection:text-blue-300">
        {children}
      </body>
    </html>
  );
}
