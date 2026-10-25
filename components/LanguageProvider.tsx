"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { contentByLanguage } from "@/data";
import type {
  Language,
  LanguageContextValue,
  PageKey,
  RootLayoutProps,
} from "@/data/type";

const LanguageContext = createContext<LanguageContextValue | null>(null);
const storageKey = "collectorate-language";

export default function LanguageProvider({ children }: RootLayoutProps) {
  const [language, updateLanguage] = useState<Language>("hi");
  const pathname = usePathname();

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === "hi" || saved === "en") updateLanguage(saved);
    } catch {}

    const synchronize = (event: StorageEvent) => {
      if (
        event.key === storageKey &&
        (event.newValue === "hi" || event.newValue === "en")
      )
        updateLanguage(event.newValue);
    };
    window.addEventListener("storage", synchronize);
    return () => window.removeEventListener("storage", synchronize);
  }, []);

  const setLanguage = useCallback((next: Language) => {
    updateLanguage(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {}
  }, []);

  const content = contentByLanguage[language];

  useEffect(() => {
    document.documentElement.lang = language;
    const pageKey = pathname.split("/").filter(Boolean)[0] as
      PageKey | undefined;
    const page = pageKey ? content.pages[pageKey] : undefined;
    const title = page
      ? `${page.title} | ${content.metadata.title}`
      : content.metadata.title;
    const synchronizeMetadata = () => {
      if (document.title !== title) document.title = title;
      const description = document.querySelector('meta[name="description"]');
      if (description?.getAttribute("content") !== content.metadata.description) {
        description?.setAttribute("content", content.metadata.description);
      }
    };
    synchronizeMetadata();
    const observer = new MutationObserver(synchronizeMetadata);
    observer.observe(document.head, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["content"],
    });
    return () => observer.disconnect();
  }, [language, pathname, content]);

  const value = useMemo(
    () => ({ language, setLanguage, content }),
    [language, setLanguage, content],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageProvider is required.");
  return context;
}

export function useContent() {
  return useLanguage().content;
}
