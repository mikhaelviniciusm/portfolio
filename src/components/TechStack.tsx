"use client";

import { Activity, Database, Server, Smartphone, type LucideIcon } from "lucide-react";
import { TECH_STACK_GROUPS, type TechDomainGroup } from "@/data/profile";
import { useAppPreferences } from "@/context/AppPreferencesContext";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const DOMAIN_ICON_MAP: Record<TechDomainGroup["iconKey"], LucideIcon> = {
  mobile: Smartphone,
  backend: Database,
  devops: Server,
  enterprise: Activity,
};

// Seção de Stack Tecnológica agrupada em quatro domínios de engenharia.
export function TechStack() {
  const { locale, t } = useAppPreferences();

  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="border-b border-[var(--border-subtle)] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            index={t.stack.index}
            title={t.stack.title}
            subtitle={t.stack.subtitle}
            headingId="stack-heading"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {TECH_STACK_GROUPS.map((group, idx) => {
            const Icon = DOMAIN_ICON_MAP[group.iconKey];
            return (
              <Reveal key={group.id} delay={idx * 0.05}>
                <SpotlightCard className="flex h-full flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent-text)]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">
                        {group.title[locale]}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {group.description[locale]}
                    </p>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2 border-t border-[var(--border-subtle)] pt-4">
                    {group.items.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-2.5 py-1 font-mono text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-text)] hover:text-[var(--text-primary)]"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
