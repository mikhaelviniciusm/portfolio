"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDownRight,
  Check,
  Copy,
  Download,
  ExternalLink,
  Github,
  Languages,
  Linkedin,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";
import { PROFILE_CONTACT, SOCIAL_LINKS } from "@/data/profile";
import { useAppPreferences } from "@/context/AppPreferencesContext";

interface CommandItem {
  id: string;
  group: "navigate" | "actions" | "links";
  label: string;
  meta?: string;
  icon: typeof ArrowDownRight;
  onSelect: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (nextOpen: boolean) => void;
}

// Paleta de comandos estilo Linear (⌘K / Ctrl+K) para navegação e ações rápidas.
export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const { theme, t, toggleTheme, toggleLocale } = useAppPreferences();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const commands = useMemo<CommandItem[]>(() => {
    const scrollTo = (id: string) => {
      onOpenChange(false);
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    const copyEmail = async () => {
      try {
        await navigator.clipboard?.writeText(PROFILE_CONTACT.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onOpenChange(false);
        }, 700);
      } catch {
        onOpenChange(false);
      }
    };

    return [
      {
        id: "nav-about",
        group: "navigate",
        label: t.nav.about,
        meta: "#about",
        icon: ArrowDownRight,
        onSelect: () => scrollTo("about"),
      },
      {
        id: "nav-experience",
        group: "navigate",
        label: t.nav.experience,
        meta: "#experience",
        icon: ArrowDownRight,
        onSelect: () => scrollTo("experience"),
      },
      {
        id: "nav-projects",
        group: "navigate",
        label: t.nav.projects,
        meta: "#projects",
        icon: ArrowDownRight,
        onSelect: () => scrollTo("projects"),
      },
      {
        id: "nav-stack",
        group: "navigate",
        label: t.nav.stack,
        meta: "#stack",
        icon: ArrowDownRight,
        onSelect: () => scrollTo("stack"),
      },
      {
        id: "nav-contact",
        group: "navigate",
        label: t.nav.contact,
        meta: "#contact",
        icon: ArrowDownRight,
        onSelect: () => scrollTo("contact"),
      },
      {
        id: "action-resume",
        group: "actions",
        label: t.command.actionResume,
        meta: "PDF",
        icon: Download,
        onSelect: () => {
          onOpenChange(false);
          window.open(PROFILE_CONTACT.resumeUrl, "_blank", "noopener,noreferrer");
        },
      },
      {
        id: "action-email",
        group: "actions",
        label: copied ? t.contact.copiedButton : t.command.actionCopyEmail,
        meta: PROFILE_CONTACT.email,
        icon: copied ? Check : Copy,
        onSelect: () => void copyEmail(),
      },
      {
        id: "action-theme",
        group: "actions",
        label: t.command.actionToggleTheme,
        icon: theme === "dark" ? Sun : Moon,
        onSelect: () => {
          toggleTheme();
          onOpenChange(false);
        },
      },
      {
        id: "action-locale",
        group: "actions",
        label: t.command.actionToggleLocale,
        icon: Languages,
        onSelect: () => {
          toggleLocale();
          onOpenChange(false);
        },
      },
      {
        id: "link-github",
        group: "links",
        label: "GitHub",
        meta: "@mikhaelviniciusm",
        icon: Github,
        onSelect: () => {
          onOpenChange(false);
          window.open(SOCIAL_LINKS.github, "_blank", "noopener,noreferrer");
        },
      },
      {
        id: "link-linkedin",
        group: "links",
        label: "LinkedIn",
        meta: "/in/mikhaelvinicius",
        icon: Linkedin,
        onSelect: () => {
          onOpenChange(false);
          window.open(SOCIAL_LINKS.linkedin, "_blank", "noopener,noreferrer");
        },
      },
    ];
  }, [copied, onOpenChange, t, theme, toggleLocale, toggleTheme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        (item.meta && item.meta.toLowerCase().includes(q))
    );
  }, [commands, query]);

  // Atalho global ⌘K / Ctrl+K
  useEffect(() => {
    const handleGlobalKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", handleGlobalKey);
    return () => window.removeEventListener("keydown", handleGlobalKey);
  }, [open, onOpenChange]);

  // Gerencia foco ao abrir e restaura foco ao fechar
  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      requestAnimationFrame(() => inputRef.current?.focus());
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const safeIndex = filtered.length === 0 ? 0 : Math.min(activeIndex, filtered.length - 1);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onOpenChange(false);
      return;
    }
    if (event.key === "ArrowDown" && filtered.length > 0) {
      event.preventDefault();
      setActiveIndex((safeIndex + 1) % filtered.length);
      return;
    }
    if (event.key === "ArrowUp" && filtered.length > 0) {
      event.preventDefault();
      setActiveIndex((safeIndex - 1 + filtered.length) % filtered.length);
      return;
    }
    if (event.key === "Enter" && filtered[safeIndex]) {
      event.preventDefault();
      filtered[safeIndex].onSelect();
    }
  };

  const groupLabels: Record<CommandItem["group"], string> = {
    navigate: t.command.groupNavigate,
    actions: t.command.groupActions,
    links: t.command.groupLinks,
  };

  const groups: CommandItem["group"][] = ["navigate", "actions", "links"];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center bg-black/60 px-4 pt-[14vh] backdrop-blur-xs"
      onClick={() => onOpenChange(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.command.triggerShort}
        onClick={(event) => event.stopPropagation()}
        onKeyDown={handleKeyDown}
        className="w-full max-w-lg overflow-hidden rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface)] shadow-2xl"
      >
        {/* Campo de busca */}
        <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] px-4 py-3">
          <Search className="h-4 w-4 shrink-0 text-[var(--text-muted)]" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            placeholder={t.command.placeholder}
            aria-label={t.command.placeholder}
            className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none"
          />
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            aria-label={t.command.hintClose}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Lista de comandos */}
        <div className="max-h-[55vh] overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-[var(--text-muted)]">
              {t.command.empty}
            </p>
          ) : (
            groups.map((group) => {
              const items = filtered.filter((item) => item.group === group);
              if (items.length === 0) return null;

              return (
                <div key={group} className="mb-2 last:mb-0">
                  <p className="px-3 py-1.5 font-mono text-[11px] font-medium text-[var(--text-muted)]">
                    {groupLabels[group]}
                  </p>
                  <ul>
                    {items.map((item) => {
                      const flatIndex = filtered.indexOf(item);
                      const isActive = flatIndex === safeIndex;
                      const Icon = item.icon;

                      return (
                        <li key={item.id}>
                          <button
                            type="button"
                            onMouseEnter={() => setActiveIndex(flatIndex)}
                            onClick={item.onSelect}
                            className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                              isActive
                                ? "bg-[var(--accent-soft)] text-[var(--text-primary)]"
                                : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
                            }`}
                          >
                            <span className="flex items-center gap-2.5">
                              <Icon
                                className={`h-4 w-4 shrink-0 ${
                                  isActive ? "text-[var(--accent-text)]" : "text-[var(--text-muted)]"
                                }`}
                                aria-hidden="true"
                              />
                              <span className="font-medium">{item.label}</span>
                            </span>
                            {item.meta ? (
                              <span className="flex items-center gap-1 font-mono text-xs text-[var(--text-muted)]">
                                <span>{item.meta}</span>
                                {item.group === "links" ? (
                                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                                ) : null}
                              </span>
                            ) : null}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })
          )}
        </div>

        {/* Rodapé de atalhos */}
        <div className="flex items-center justify-between border-t border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-4 py-2 font-mono text-[11px] text-[var(--text-muted)]">
          <span className="flex items-center gap-2">
            <kbd className="rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] px-1.5 py-0.5">
              ↑↓
            </kbd>
            <kbd className="rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] px-1.5 py-0.5">
              Enter
            </kbd>
            <span>{t.command.hintSelect}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <kbd className="rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] px-1.5 py-0.5">
              Esc
            </kbd>
            <span>{t.command.hintClose}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
