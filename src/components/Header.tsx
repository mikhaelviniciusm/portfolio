"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { PROFILE_CONTACT } from "@/data/profile";
import { useAppPreferences } from "@/context/AppPreferencesContext";

const SECTION_IDS = ["about", "experience", "projects", "stack", "contact"] as const;

// Cabeçalho fixo com glassmorphism, navegação suave, alternadores de tema/idioma e CTA de currículo.
export function Header() {
  const { theme, locale, t, toggleTheme, setLocale } = useAppPreferences();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "stack", label: t.nav.stack },
    { id: "contact", label: t.nav.contact },
  ];

  // Destaca a seção visível no viewport durante a rolagem
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -55% 0px", threshold: 0.05 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Fecha o menu mobile ao pressionar Escape
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-glass)] backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo tipográfico com ícone SVG */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 rounded-lg py-1 pr-2 text-sm font-semibold tracking-tight text-[var(--text-primary)]"
        >
          <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] transition-colors group-hover:border-[var(--accent-text)]">
            <Image
              src="/favicon.svg"
              alt="Logo mikhael.dev"
              width={32}
              height={32}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="font-mono text-sm font-medium text-[var(--text-primary)]">
            {PROFILE_CONTACT.brandHandle}
          </span>
        </a>

        {/* Navegação desktop */}
        <nav aria-label={t.a11y.primaryNav} className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-[var(--accent-soft)] text-[var(--accent-text)]"
                    : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Controles e CTA principal */}
        <div className="hidden items-center gap-2 lg:flex">
          {/* Seletor de idioma PT-BR / EN */}
          <div
            role="group"
            aria-label={t.a11y.switchLanguage}
            className="flex items-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-0.5 font-mono text-xs"
          >
            <button
              type="button"
              onClick={() => setLocale("pt-BR")}
              aria-pressed={locale === "pt-BR"}
              className={`rounded-md px-2 py-1 font-medium transition-colors ${
                locale === "pt-BR"
                  ? "bg-[var(--accent-soft)] text-[var(--accent-text)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              PT-BR
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
              className={`rounded-md px-2 py-1 font-medium transition-colors ${
                locale === "en"
                  ? "bg-[var(--accent-soft)] text-[var(--accent-text)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              EN
            </button>
          </div>

          {/* Alternador de tema Dark / Light */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? t.a11y.toggleThemeToLight : t.a11y.toggleThemeToDark
            }
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        {/* Ações compactas para dispositivos móveis e tablets */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? t.a11y.toggleThemeToLight : t.a11y.toggleThemeToDark
            }
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)]"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)]"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Menu expansível mobile */}
      {mobileMenuOpen ? (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-4 py-4 lg:hidden"
        >
          <nav aria-label={t.a11y.primaryNav} className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-4">
            <div
              role="group"
              aria-label={t.a11y.switchLanguage}
              className="flex items-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-0.5 font-mono text-xs"
            >
              <button
                type="button"
                onClick={() => setLocale("pt-BR")}
                aria-pressed={locale === "pt-BR"}
                className={`rounded-md px-2.5 py-1.5 font-medium ${
                  locale === "pt-BR"
                    ? "bg-[var(--accent-soft)] text-[var(--accent-text)]"
                    : "text-[var(--text-muted)]"
                }`}
              >
                PT-BR
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                aria-pressed={locale === "en"}
                className={`rounded-md px-2.5 py-1.5 font-medium ${
                  locale === "en"
                    ? "bg-[var(--accent-soft)] text-[var(--accent-text)]"
                    : "text-[var(--text-muted)]"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
