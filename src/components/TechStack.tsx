"use client";

import { Activity, Database, Server, Smartphone, type LucideIcon } from "lucide-react";
import { TECH_STACK_GROUPS, type TechDomainGroup } from "@/data/profile";
import { useAppPreferences } from "@/context/AppPreferencesContext";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const DOMAIN_ICON_MAP: Record<TechDomainGroup["iconKey"], LucideIcon> = {
  mobile: Smartphone,
  backend: Database,
  devops: Server,
  enterprise: Activity,
};

// Seção de Stack Tecnológica em matriz única com divisórias hairline.
export function TechStack() {
  const { locale, t } = useAppPreferences();

  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="border-b border-[var(--border-subtle)] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title={t.stack.title}
            subtitle={t.stack.subtitle}
            headingId="stack-heading"
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] md:grid-cols-2">
            {TECH_STACK_GROUPS.map((group, idx) => {
              const Icon = DOMAIN_ICON_MAP[group.iconKey];
              const isLeftColumn = idx % 2 === 0;
              const isBottomRow = idx >= 2;

              return (
                <div
                  key={group.id}
                  className={`flex flex-col justify-between p-6 sm:p-7 ${
                    isLeftColumn ? "md:border-r md:border-[var(--border-subtle)]" : ""
                  } ${
                    idx > 0 ? "border-t border-[var(--border-subtle)]" : ""
                  } ${isBottomRow ? "md:border-t" : "md:border-t-0"}`}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 shrink-0 text-[var(--text-muted)]" aria-hidden="true" />
                      <h3 className="text-base font-semibold text-[var(--text-primary)] sm:text-lg">
                        {group.title[locale]}
                      </h3>
                    </div>

                    <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {group.description[locale]}
                    </p>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {group.items.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-2.5 py-1 font-mono text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
