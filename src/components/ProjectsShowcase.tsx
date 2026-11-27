"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, FolderGit2, Globe, Layers, Lock } from "lucide-react";
import { PROJECTS, type ProjectCategory } from "@/data/profile";
import { useAppPreferences } from "@/context/AppPreferencesContext";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const CATEGORY_ORDER: ProjectCategory[] = ["all", "mobile", "web", "devops"];

// Vitrine de projetos com destaque flagship no item principal e filtros reativos por categoria.
export function ProjectsShowcase() {
  const { locale, t } = useAppPreferences();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const prefersReducedMotion = useReducedMotion();

  const categoryCounts = useMemo<Record<ProjectCategory, number>>(
    () => ({
      all: PROJECTS.length,
      mobile: PROJECTS.filter((p) => p.categories.includes("mobile")).length,
      web: PROJECTS.filter((p) => p.categories.includes("web")).length,
      devops: PROJECTS.filter((p) => p.categories.includes("devops")).length,
    }),
    []
  );

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return PROJECTS;
    return PROJECTS.filter((project) => project.categories.includes(selectedCategory));
  }, [selectedCategory]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-[var(--border-subtle)] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title={t.projects.title}
            subtitle={t.projects.subtitle}
            headingId="projects-heading"
          />
        </Reveal>

        {/* Barra de filtros por categoria */}
        <Reveal delay={0.05}>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div
              role="group"
              aria-label={t.projects.title}
              className="flex flex-wrap gap-2"
            >
              {CATEGORY_ORDER.map((category) => {
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={isSelected}
                    className={`inline-flex min-h-[40px] items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-medium transition-colors ${
                      isSelected
                        ? "border-[var(--accent-primary)] bg-[var(--accent-primary)] text-white"
                        : "border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    <span>{t.projects.filters[category]}</span>
                    <span
                      className={`rounded-md px-1.5 py-0.5 font-mono text-[11px] tabular-nums ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-[var(--bg-surface-elevated)] text-[var(--text-muted)]"
                      }`}
                    >
                      {categoryCounts[category]}
                    </span>
                  </button>
                );
              })}
            </div>

            <p
              aria-live="polite"
              className="font-mono text-xs text-[var(--text-muted)] tabular-nums"
            >
              {t.projects.resultsCount(filteredProjects.length)}
            </p>
          </div>
        </Reveal>

        {/* Grid de projetos */}
        {filteredProjects.length === 0 ? (
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-10 text-center text-sm text-[var(--text-muted)]">
            {t.projects.emptyMessage}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <AnimatePresence initial={false} mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const isFlagship = selectedCategory === "all" && idx === 0;
                const hasLink = Boolean(project.repoUrl || project.demoUrl);

                return (
                  <motion.div
                    key={project.id}
                    layout={!prefersReducedMotion}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className={isFlagship ? "md:col-span-2" : ""}
                  >
                    <SpotlightCard
                      as="article"
                      className={`flex h-full flex-col justify-between p-6 ${
                        hasLink ? "card-interactive" : ""
                      }`}
                    >
                      <div
                        className={
                          isFlagship
                            ? "grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start"
                            : ""
                        }
                      >
                        <div className={isFlagship ? "md:col-span-7" : ""}>
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                              {project.title[locale]}
                            </h3>
                            {project.featured ? (
                              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[var(--accent-text)]">
                                <Layers className="h-3 w-3" aria-hidden="true" />
                                <span>{t.projects.featuredBadge}</span>
                              </span>
                            ) : null}
                          </div>

                          <p className="mt-2.5 max-w-[65ch] text-sm leading-relaxed text-[var(--text-secondary)]">
                            {project.summary[locale]}
                          </p>

                          <ul className="mt-4 space-y-1.5 text-xs leading-relaxed text-[var(--text-muted)]">
                            {project.highlights[locale].map((highlight) => (
                              <li key={highlight} className="flex items-start gap-2">
                                <span
                                  aria-hidden="true"
                                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-text)]"
                                />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {isFlagship ? (
                          <div className="flex h-full flex-col justify-between border-t border-[var(--border-subtle)] pt-4 md:col-span-5 md:border-t-0 md:border-l md:pt-0 md:pl-6">
                            <div>
                              <p className="font-mono text-xs text-[var(--text-muted)]">
                                {project.eyebrow[locale]}
                              </p>
                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-2 py-0.5 font-mono text-[11px] font-medium text-[var(--text-secondary)]"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-4">
                              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)]">
                                {!hasLink ? <Lock className="h-3 w-3" aria-hidden="true" /> : null}
                                <span>{project.statusLabel[locale]}</span>
                              </span>

                              {project.repoUrl ? (
                                <a
                                  href={project.repoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface-elevated)] px-3 py-1.5 font-mono text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-text)] hover:text-[var(--accent-text)]"
                                >
                                  <FolderGit2 className="h-3.5 w-3.5" aria-hidden="true" />
                                  <span>{t.projects.viewRepo}</span>
                                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                                </a>
                              ) : null}
                            </div>
                          </div>
                        ) : null}
                      </div>

                      {!isFlagship ? (
                        <div className="mt-6 border-t border-[var(--border-subtle)] pt-4">
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-2 py-0.5 font-mono text-[11px] font-medium text-[var(--text-secondary)]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)]">
                              {!hasLink ? <Lock className="h-3 w-3" aria-hidden="true" /> : null}
                              <span>
                                {project.eyebrow[locale]} · {project.statusLabel[locale]}
                              </span>
                            </span>

                            <div className="flex flex-wrap items-center gap-2">
                              {project.repoUrl ? (
                                <a
                                  href={project.repoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface-elevated)] px-3 py-1.5 font-mono text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-text)] hover:text-[var(--accent-text)]"
                                >
                                  <FolderGit2 className="h-3.5 w-3.5" aria-hidden="true" />
                                  <span>{t.projects.viewRepo}</span>
                                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                                </a>
                              ) : null}

                              {project.demoUrl ? (
                                <a
                                  href={project.demoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--accent-primary)] px-3 py-1.5 font-mono text-xs font-medium text-white transition-colors hover:bg-[var(--accent-primary-hover)]"
                                >
                                  <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                                  <span>{t.projects.viewDemo}</span>
                                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                                </a>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
