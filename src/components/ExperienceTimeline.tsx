"use client";

import { useState } from "react";
import {
  Award,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCES,
  type ExperienceItem,
} from "@/data/profile";
import { useAppPreferences } from "@/context/AppPreferencesContext";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

type TimelineFilter = "all" | "work" | "education";

// Timeline interativa unificando experiência profissional, formação acadêmica e certificações.
export function ExperienceTimeline() {
  const { locale, t } = useAppPreferences();
  const [filter, setFilter] = useState<TimelineFilter>("all");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "dk-systems-sap": true,
    "trt7-intern": true,
    "unichristus-ads": true,
  });

  const toggleItem = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const showWork = filter === "all" || filter === "work";
  const showEducation = filter === "all" || filter === "education";

  const renderTimelineItem = (item: ExperienceItem) => {
    const isExpanded = Boolean(expandedIds[item.id]);
    const isWork = item.kind === "work";

    return (
      <li key={item.id} className="relative pl-8 sm:pl-10">
        {/* Marcador na linha vertical */}
        <span
          aria-hidden="true"
          className={`absolute top-6 left-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border ${
            isWork
              ? "border-[var(--accent-text)] bg-[var(--accent-soft)] text-[var(--accent-text)]"
              : "border-[var(--accent-cyan-text)] bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)]"
          }`}
        >
          {isWork ? (
            <Briefcase className="h-3 w-3" />
          ) : (
            <GraduationCap className="h-3 w-3" />
          )}
        </span>

        <SpotlightCard as="article" className="p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  {item.role[locale]}
                </h3>
                {item.current ? (
                  <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[var(--accent-text)]">
                    {t.experience.currentBadge}
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-sm font-medium text-[var(--accent-cyan-text)]">
                {item.organization} ·{" "}
                <span className="text-[var(--text-muted)]">{item.location}</span>
              </p>
            </div>

            <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-2.5 py-1 font-mono text-xs text-[var(--text-secondary)]">
              {item.period[locale]}
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
            {item.summary[locale]}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isExpanded}
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-mono text-xs font-medium text-[var(--accent-text)] transition-colors hover:bg-[var(--accent-soft)]"
            >
              <span>
                {isExpanded ? t.experience.hideDetails : t.experience.showDetails}
              </span>
              {isExpanded ? (
                <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </button>
          </div>

          {isExpanded ? (
            <ul className="mt-4 space-y-2 border-t border-[var(--border-subtle)] pt-4 text-sm text-[var(--text-secondary)]">
              {item.highlights[locale].map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-cyan-text)]"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </SpotlightCard>
      </li>
    );
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-[var(--border-subtle)] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              index={t.experience.index}
              title={t.experience.title}
              subtitle={t.experience.subtitle}
              headingId="experience-heading"
            />
          </Reveal>

          {/* Filtros da timeline */}
          <Reveal delay={0.06} className="mb-10">
            <div
              role="group"
              aria-label={t.experience.title}
              className="inline-flex flex-wrap gap-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-1"
            >
              {(
                [
                  { id: "all", label: t.experience.filterAll },
                  { id: "work", label: t.experience.filterWork },
                  { id: "education", label: t.experience.filterEducation },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  aria-pressed={filter === tab.id}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                    filter === tab.id
                      ? "bg-[var(--accent-primary)] text-white"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Linha do tempo */}
        <div className="space-y-12">
          {showWork ? (
            <div>
              <h3 className="mb-6 font-mono text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase">
                {t.experience.workHeading}
              </h3>
              <ol className="relative ml-3 space-y-6 border-l border-[var(--border-subtle)]">
                {EXPERIENCES.map(renderTimelineItem)}
              </ol>
            </div>
          ) : null}

          {showEducation ? (
            <div className="space-y-10">
              <div>
                <h3 className="mb-6 font-mono text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase">
                  {t.experience.educationHeading}
                </h3>
                <ol className="relative ml-3 space-y-6 border-l border-[var(--border-subtle)]">
                  {EDUCATION.map(renderTimelineItem)}
                </ol>
              </div>

              <div>
                <h3 className="mb-5 font-mono text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase">
                  {t.experience.certificationsHeading}
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {CERTIFICATIONS.map((cert) => (
                    <SpotlightCard key={cert.id} className="p-5">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent-text)]">
                            <Award className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <div>
                            <h4 className="text-sm font-bold text-[var(--text-primary)]">
                              {cert.title[locale]}
                            </h4>
                            <p className="mt-1 font-mono text-xs text-[var(--text-muted)]">
                              {cert.issuer} · {cert.year}
                              {cert.workload ? ` · ${cert.workload[locale]}` : ""}
                            </p>
                          </div>
                        </div>

                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t.experience.verifyCredential}: ${cert.title[locale]}`}
                          className="inline-flex shrink-0 self-start items-center gap-1 rounded-md border border-[var(--border-subtle)] px-2.5 py-1 font-mono text-[11px] font-medium text-[var(--accent-text)] transition-colors hover:border-[var(--accent-text)] sm:self-auto"
                        >
                          <span>{t.experience.verifyCredential}</span>
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      </div>
                    </SpotlightCard>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
