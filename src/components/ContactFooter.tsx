"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  Check,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { PROFILE_CONTACT, SOCIAL_LINKS } from "@/data/profile";
import { useAppPreferences } from "@/context/AppPreferencesContext";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

// Copia texto para a área de transferência com fallback seguro para navegadores sem Clipboard API.
async function copyTextSafely(text: string): Promise<boolean> {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Prossegue para o fallback com textarea temporário
    }
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

// Seção de contato editorial limpa (sem nested cards) e rodapé minimalista.
export function ContactFooter() {
  const { t } = useAppPreferences();
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopyEmail = async () => {
    const success = await copyTextSafely(PROFILE_CONTACT.email);
    if (!success) return;

    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 2500);
  };

  const socialChannels = [
    {
      name: "LinkedIn",
      handle: "/in/mikhaelvinicius",
      description: t.contact.linkedinDesc,
      href: SOCIAL_LINKS.linkedin,
      icon: Linkedin,
    },
    {
      name: "GitHub",
      handle: "@mikhaelviniciusm",
      description: t.contact.githubDesc,
      href: SOCIAL_LINKS.github,
      icon: Github,
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-14 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              title={t.contact.title}
              subtitle={t.contact.subtitle}
              headingId="contact-heading"
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Bloco direto de e-mail */}
            <Reveal className="lg:col-span-6">
              <SpotlightCard className="flex h-full flex-col justify-between p-6 sm:p-8">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    {t.contact.ctaHeading}
                  </h3>
                  <p className="mt-2.5 max-w-[54ch] text-sm leading-relaxed text-[var(--text-secondary)]">
                    {t.contact.ctaDescription}
                  </p>

                  <div className="mt-6 border-t border-[var(--border-subtle)] pt-5">
                    <p className="font-mono text-xs text-[var(--text-muted)]">
                      {t.contact.emailLabel}
                    </p>
                    <p className="mt-1 font-mono text-base font-medium break-all text-[var(--text-primary)]">
                      {PROFILE_CONTACT.email}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <MagneticButton
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[var(--accent-primary)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--accent-primary-hover)]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" aria-hidden="true" />
                        <span>{t.contact.copiedButton}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" aria-hidden="true" />
                        <span>{t.contact.copyButton}</span>
                      </>
                    )}
                  </MagneticButton>

                  <MagneticButton
                    href={`mailto:${PROFILE_CONTACT.email}`}
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]"
                  >
                    <Mail className="h-4 w-4 text-[var(--text-muted)]" aria-hidden="true" />
                    <span>{t.contact.sendEmailButton}</span>
                  </MagneticButton>

                  <span role="status" aria-live="polite" className="sr-only">
                    {copied ? t.a11y.emailCopiedAnnouncement : ""}
                  </span>
                </div>
              </SpotlightCard>
            </Reveal>

            {/* Lista editorial de canais sociais */}
            <Reveal delay={0.08} className="lg:col-span-6">
              <div className="flex h-full flex-col justify-between overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
                <div className="border-b border-[var(--border-subtle)] px-6 py-4">
                  <h3 className="font-mono text-xs font-medium text-[var(--text-muted)]">
                    {t.contact.channelsTitle}
                  </h3>
                </div>

                <ul className="flex-1 divide-y divide-[var(--border-subtle)]">
                  {socialChannels.map((channel) => {
                    const Icon = channel.icon;
                    return (
                      <li key={`${channel.name}-${channel.handle}`} className="h-1/2">
                        <a
                          href={channel.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex h-full items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-[var(--bg-surface-hover)]"
                        >
                          <div className="flex items-center gap-4">
                            <Icon
                              className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent-text)]"
                              aria-hidden="true"
                            />
                            <div>
                              <p className="text-sm font-semibold text-[var(--text-primary)]">
                                {channel.name}{" "}
                                <span className="font-mono text-xs font-normal text-[var(--text-muted)]">
                                  {channel.handle}
                                </span>
                              </p>
                              <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
                                {channel.description}
                              </p>
                            </div>
                          </div>

                          <ExternalLink
                            className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent-text)]"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Rodapé minimalista */}
      <footer className="border-t border-[var(--border-subtle)] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <div className="space-y-1">
            <p className="font-mono text-xs font-medium text-[var(--text-primary)] tabular-nums">
              {PROFILE_CONTACT.brandHandle} · © {currentYear} {PROFILE_CONTACT.displayName}
            </p>
            <p className="text-xs text-[var(--text-muted)]">{t.footer.builtWith}</p>
          </div>

          <a
            href="#top"
            aria-label={t.a11y.backToTop}
            className="no-print inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3.5 py-2 font-mono text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
}
