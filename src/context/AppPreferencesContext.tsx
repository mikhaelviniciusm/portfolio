"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Locale } from "@/data/profile";
import { TRANSLATIONS, type TranslationDictionary } from "@/i18n/translations";

export type ThemeMode = "dark" | "light";

interface AppPreferencesContextValue {
  theme: ThemeMode;
  locale: Locale;
  t: TranslationDictionary;
  toggleTheme: () => void;
  setLocale: (nextLocale: Locale) => void;
  toggleLocale: () => void;
}

const THEME_STORAGE_KEY = "portfolio-theme";
const LOCALE_STORAGE_KEY = "portfolio-locale";
const PREFERENCES_EVENT = "portfolio-preferences-change";

const AppPreferencesContext = createContext<AppPreferencesContextValue | null>(null);

function subscribeToPreferences(onStoreChange: () => void): () => void {
  const handleChange = () => onStoreChange();
  window.addEventListener("storage", handleChange);
  window.addEventListener(PREFERENCES_EVENT, handleChange);
  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(PREFERENCES_EVENT, handleChange);
  };
}

function getThemeSnapshot(): ThemeMode {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    return saved === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function getServerThemeSnapshot(): ThemeMode {
  return "dark";
}

function getLocaleSnapshot(): Locale {
  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
    return saved === "en" ? "en" : "pt-BR";
  } catch {
    return "pt-BR";
  }
}

function getServerLocaleSnapshot(): Locale {
  return "pt-BR";
}

function notifyPreferencesChange(): void {
  window.dispatchEvent(new Event(PREFERENCES_EVENT));
}

export function AppPreferencesProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeToPreferences,
    getThemeSnapshot,
    getServerThemeSnapshot
  );
  const locale = useSyncExternalStore(
    subscribeToPreferences,
    getLocaleSnapshot,
    getServerLocaleSnapshot
  );

  // Sincroniza os atributos externos do documento HTML e a barra de status móvel (theme-color)
  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = theme;
    document.documentElement.lang = locale;

    const themeColor = isDark ? "#0a0a0f" : "#f8fafc";
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", themeColor);
  }, [theme, locale]);

  const toggleTheme = useCallback(() => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Ignora indisponibilidade de storage em modos privados restritos
    }
    notifyPreferencesChange();
  }, [theme]);

  const setLocale = useCallback((nextLocale: Locale) => {
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    } catch {
      // Ignora indisponibilidade de storage em modos privados restritos
    }
    notifyPreferencesChange();
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "pt-BR" ? "en" : "pt-BR");
  }, [locale, setLocale]);

  const value = useMemo<AppPreferencesContextValue>(
    () => ({
      theme,
      locale,
      t: TRANSLATIONS[locale],
      toggleTheme,
      setLocale,
      toggleLocale,
    }),
    [theme, locale, toggleTheme, setLocale, toggleLocale]
  );

  return (
    <AppPreferencesContext.Provider value={value}>
      {children}
    </AppPreferencesContext.Provider>
  );
}

export function useAppPreferences(): AppPreferencesContextValue {
  const context = useContext(AppPreferencesContext);
  if (!context) {
    throw new Error("useAppPreferences deve ser usado dentro de AppPreferencesProvider.");
  }
  return context;
}
