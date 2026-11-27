"use client";

import {
  Compass,
  Cpu,
  ExternalLink,
  Languages,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { CERTIFICATIONS, PROFILE_CONTACT } from "@/data/profile";
import { useAppPreferences } from "@/context/AppPreferencesContext";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

// Seção Sobre Mim estruturada em Bento Grid com cards interativos de spotlight.
export function AboutBento() {
  const { locale, t } = useAppPreferences();
  const englishCertUrl =
    CERTIFICATIONS.find((cert) => cert.id === "efset-c1")?.credentialUrl ??
    "https://cert.efset.org/a3YzSm";

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-[var(--border-subtle)] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            index={t.about.index}
            title={t.about.title}
            subtitle={t.about.subtitle}
            headingId="about-heading"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Card principal: Resumo profissional */}
          <Reveal className="md:col-span-7">
            <SpotlightCard className="flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="font-mono text-xs font-medium text-[var(--text-muted)]">
                  {t.about.mainEyebrow}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                  {t.about.mainTitle}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                  {t.about.mainParagraphOne}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                  {t.about.mainParagraphTwo}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border-subtle)] pt-4 font-mono text-xs text-[var(--text-muted)]">
                <span className="rounded-md bg-[var(--bg-surface-elevated)] px-2.5 py-1">
                  ADS · Unichristus
                </span>
                <span className="rounded-md bg-[var(--bg-surface-elevated)] px-2.5 py-1">
                  SAP Ops · DK Systems
                </span>
                <span className="rounded-md bg-[var(--bg-surface-elevated)] px-2.5 py-1">
                  SwiftUI · Full-Stack · Linux
                </span>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Card secundário: Localização e Idiomas */}
          <div className="flex flex-col gap-4 md:col-span-5">
            <Reveal delay={0.05}>
              <SpotlightCard className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs font-medium text-[var(--text-muted)]">
                      {t.about.locationEyebrow}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">
                      {t.about.locationTitle}
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {t.about.locationDetail}
                </p>
                <div className="mt-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-3 py-2 font-mono text-xs text-[var(--text-muted)]">
                  {PROFILE_CONTACT.location.city} — {PROFILE_CONTACT.location.state} ·{" "}
                  {PROFILE_CONTACT.location.timezone}
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.1}>
              <SpotlightCard className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs font-medium text-[var(--text-muted)]">
                      {t.about.languageEyebrow}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                      {t.about.languageTitle}
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]">
                    <Languages className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-[var(--text-secondary)]">
                  <li>• {t.about.languagePortuguese}</li>
                  <li>• {t.about.languageEnglish}</li>
                </ul>
                <a
                  href={englishCertUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[var(--accent-text)] hover:underline"
                >
                  <span>{t.about.viewCertificate}</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* Card secundário: Foco Atual */}
          <Reveal delay={0.08} className="md:col-span-5">
            <SpotlightCard className="h-full p-6">
              <div className="flex items-center gap-2.5">
                <Compass className="h-4 w-4 text-[var(--text-muted)]" aria-hidden="true" />
                <p className="font-mono text-xs font-medium text-[var(--text-muted)]">
                  {t.about.focusEyebrow}
                </p>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                {t.about.focusTitle}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {t.about.focusItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--text-secondary)]"
                  >
                    <Cpu
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-text)]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>

          {/* Card secundário: Mentalidade */}
          <Reveal delay={0.12} className="md:col-span-7">
            <SpotlightCard className="h-full p-6">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 text-[var(--text-muted)]" aria-hidden="true" />
                <p className="font-mono text-xs font-medium text-[var(--text-muted)]">
                  {t.about.mindsetEyebrow}
                </p>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                {t.about.mindsetTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {t.about.mindsetDescription}
              </p>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {t.about.mindsetPillars.map((pillar) => (
                  <div
                    key={pillar.label}
                    className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] p-3.5"
                  >
                    <p className="font-mono text-xs font-semibold text-[var(--text-primary)]">
                      {pillar.label}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-muted)]">
                      {pillar.detail}
                    </p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        </div>

        {/* Referência discreta de localização e idioma no DOM sem ruído */}
        <span className="sr-only">
          {PROFILE_CONTACT.fullName} — {PROFILE_CONTACT.location.country[locale]}
        </span>
      </div>
    </section>
  );
}
