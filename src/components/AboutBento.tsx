"use client";

import { Compass, Cpu, ExternalLink, Languages, MapPin, ShieldCheck } from "lucide-react";
import { CERTIFICATIONS, PROFILE_CONTACT } from "@/data/profile";
import { useAppPreferences } from "@/context/AppPreferencesContext";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

// Seção Sobre Mim com grade assimétrica limpa, sem kickers redundantes e sem nested cards.
export function AboutBento() {
  const { locale, t } = useAppPreferences();
  const englishCertUrl =
    CERTIFICATIONS.find((cert) => cert.id === "efset-c1")?.credentialUrl ??
    "https://cert.efset.org/a3YzSm";

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-[var(--border-subtle)] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title={t.about.title}
            subtitle={t.about.subtitle}
            headingId="about-heading"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Bloco principal: Resumo profissional */}
          <Reveal className="md:col-span-7">
            <SpotlightCard className="flex h-full flex-col justify-between p-6 sm:p-8">
              <div className="max-w-[65ch]">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl">
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

          {/* Coluna direita: Localização e Idiomas com altura distribuída para alinhar com o card principal */}
          <div className="flex h-full flex-col gap-4 md:col-span-5">
            <Reveal delay={0.05} className="flex-1">
              <SpotlightCard className="flex h-full flex-col justify-between p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                      {t.about.locationTitle}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {t.about.locationDetail}
                    </p>
                  </div>
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-[var(--text-muted)]"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-4 border-t border-[var(--border-subtle)] pt-3 font-mono text-xs text-[var(--text-muted)] tabular-nums">
                  {PROFILE_CONTACT.location.city} — {PROFILE_CONTACT.location.state} ·{" "}
                  {PROFILE_CONTACT.location.timezone}
                </p>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.1} className="flex-1">
              <SpotlightCard className="flex h-full flex-col justify-between p-6">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                      {t.about.languageTitle}
                    </h3>
                    <Languages
                      className="mt-0.5 h-5 w-5 shrink-0 text-[var(--text-muted)]"
                      aria-hidden="true"
                    />
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-[var(--text-secondary)]">
                    <li>{t.about.languagePortuguese}</li>
                    <li>{t.about.languageEnglish}</li>
                  </ul>
                </div>
                <a
                  href={englishCertUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-4 inline-flex w-fit items-center gap-1.5 font-mono text-xs font-medium text-[var(--accent-text)]"
                >
                  <span>{t.about.viewCertificate}</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* Foco Atual */}
          <Reveal delay={0.08} className="md:col-span-5">
            <SpotlightCard className="h-full p-6">
              <div className="flex items-center gap-2.5">
                <Compass className="h-4 w-4 text-[var(--text-muted)]" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {t.about.focusTitle}
                </h3>
              </div>
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

          {/* Mentalidade — colunas separadas por divisórias hairline (sem nested cards) */}
          <Reveal delay={0.12} className="md:col-span-7">
            <SpotlightCard className="flex h-full flex-col justify-between p-6">
              <div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-[var(--text-muted)]" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {t.about.mindsetTitle}
                  </h3>
                </div>
                <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-[var(--text-secondary)]">
                  {t.about.mindsetDescription}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 divide-y divide-[var(--border-subtle)] border-t border-[var(--border-subtle)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {t.about.mindsetPillars.map((pillar, idx) => (
                  <div
                    key={pillar.label}
                    className={`py-4 sm:py-0 sm:pt-4 ${
                      idx === 0 ? "sm:pr-4" : idx === 1 ? "sm:px-4" : "sm:pl-4"
                    }`}
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

        <span className="sr-only">
          {PROFILE_CONTACT.fullName} — {PROFILE_CONTACT.location.country[locale]}
        </span>
      </div>
    </section>
  );
}
