"use client";

import { MotionConfig } from "framer-motion";
import {
  AppPreferencesProvider,
  useAppPreferences,
} from "@/context/AppPreferencesContext";
import { AboutBento } from "@/components/AboutBento";
import { ContactFooter } from "@/components/ContactFooter";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { TechStack } from "@/components/TechStack";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

function PortfolioShell() {
  const { t } = useAppPreferences();

  return (
    <>
      <AnimatedBackground />
      <ScrollProgress />
      <a href="#main-content" className="skip-link">
        {t.a11y.skipToContent}
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <AboutBento />
        <ExperienceTimeline />
        <ProjectsShowcase />
        <TechStack />
      </main>
      <ContactFooter />
    </>
  );
}

// Raiz interativa do portfólio com preferências de tema/idioma e suporte a reduced motion.
export function PortfolioApp() {
  return (
    <MotionConfig reducedMotion="user">
      <AppPreferencesProvider>
        <PortfolioShell />
      </AppPreferencesProvider>
    </MotionConfig>
  );
}
