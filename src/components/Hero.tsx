"use client";

import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Terminal,
} from "lucide-react";
import { PROFILE_CONTACT, SOCIAL_LINKS } from "@/data/profile";
import { useAppPreferences } from "@/context/AppPreferencesContext";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const CORE_CHIPS = ["SwiftUI", "TypeScript", "Next.js", "Docker", "Linux", "SAP · Zabbix"];

// Seção principal acima da dobra com proposta de valor, CTAs e painel técnico.
export function Hero() {
  const { locale, t } = useAppPreferences();

  const quickLinks = [
    {
      label: "GitHub",
      href: SOCIAL_LINKS.github,
      icon: Github,
      external: true,
    },
    {
      label: "LinkedIn",
      href: SOCIAL_LINKS.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      label: PROFILE_CONTACT.email,
      href: `mailto:${PROFILE_CONTACT.email}`,
      icon: Mail,
      external: false,
    },
  ];

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative border-b border-[var(--border-subtle)] py-12 sm:py-16 lg:flex lg:min-h-[calc(100svh-4rem)] lg:items-center lg:py-20"
    >
      <div className="hero-enter mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* Coluna editorial principal */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3.5 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            <span className="font-mono text-xs font-medium text-[var(--text-secondary)]">
              {t.hero.statusBadge}
            </span>
          </div>

          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-[var(--text-primary)] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.06]"
          >
            {PROFILE_CONTACT.displayName}
          </h1>
          <p className="mt-4 max-w-[58ch] text-lg font-medium leading-snug text-[var(--accent-text)] sm:text-xl">
            {t.hero.roleTitle}
          </p>

          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-[var(--text-secondary)]">
            {t.hero.subtitle}
          </p>

          {/* CTAs principais com área de toque confortável (>= 44px) */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton
              href={PROFILE_CONTACT.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[var(--accent-primary)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--accent-primary-hover)]"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>{t.nav.downloadResume}</span>
            </MagneticButton>

            <MagneticButton
              href="#projects"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]"
            >
              <span>{t.hero.ctaProjects}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </MagneticButton>
          </div>

          {/* Links diretos sociais */}
          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                >
                  <Icon className="h-3.5 w-3.5 text-[var(--text-muted)]" aria-hidden="true" />
                  <span>{item.label}</span>
                  {item.external ? (
                    <ExternalLink
                      className="h-3 w-3 text-[var(--text-muted)]"
                      aria-hidden="true"
                    />
                  ) : null}
                </a>
              );
            })}
          </div>
        </div>

        {/* Painel técnico de resumo */}
        <div className="lg:col-span-5">
          <SpotlightCard className="p-6">
            <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
                <Terminal className="h-4 w-4 text-[var(--text-muted)]" aria-hidden="true" />
                <span>{t.hero.telemetryLabel}</span>
              </div>
              <span className="font-mono text-xs font-medium text-[var(--text-muted)] tabular-nums">
                v2.0
              </span>
            </div>

            <dl className="mt-5 divide-y divide-[var(--border-subtle)] font-mono text-xs">
              <div className="pb-3.5">
                <dt className="text-[var(--text-muted)]">{t.hero.telemetryRoleLabel}</dt>
                <dd className="mt-1 text-sm font-medium text-[var(--text-primary)]">
                  {t.hero.telemetryRole}
                </dd>
              </div>

              <div className="py-3.5">
                <dt className="text-[var(--text-muted)]">{t.hero.telemetryFocusLabel}</dt>
                <dd className="mt-1 leading-relaxed text-[var(--text-secondary)]">
                  {t.hero.telemetryFocusValue}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-4 py-3.5 sm:grid-cols-2">
                <div>
                  <dt className="text-[var(--text-muted)]">{t.hero.telemetryLocationLabel}</dt>
                  <dd className="mt-1 text-[var(--text-primary)] tabular-nums">
                    {PROFILE_CONTACT.location.country[locale]} ·{" "}
                    {PROFILE_CONTACT.location.timezone}
                  </dd>
                </div>
                <div>
                  <dt className="text-[var(--text-muted)]">{t.hero.telemetryLanguageLabel}</dt>
                  <dd className="mt-1 text-[var(--text-primary)]">
                    {t.hero.telemetryLanguageValue}
                  </dd>
                </div>
              </div>

              <div className="pt-3.5">
                <dt className="text-[var(--text-muted)]">{t.hero.telemetryStackLabel}</dt>
                <dd className="mt-2.5 flex flex-wrap gap-1.5">
                  {CORE_CHIPS.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-2.5 py-1 text-[11px] font-medium text-[var(--text-secondary)] transition-colors duration-150 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                    >
                      {chip}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
