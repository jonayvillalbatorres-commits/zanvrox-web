/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  detectBrowserLanguage,
  getAllLanguages,
  getCachedContent,
  loadContent,
  normalizeLanguageCode,
} from '../content';

const STORAGE_KEY = 'zanvrox-web-language';

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored) return normalizeLanguageCode(stored);
  return detectBrowserLanguage();
};

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);
  const [content, setContent] = useState(() => getCachedContent(getInitialLanguage()));

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  useEffect(() => {
    let active = true;

    loadContent(language)
      .then((nextContent) => {
        if (active) {
          setContent(nextContent);
        }
      })
      .catch((error) => {
        console.error('[zanvrox-web] failed to load localized content', error);
        if (active) {
          setContent(getCachedContent('en'));
        }
      });

    return () => {
      active = false;
    };
  }, [language]);

  const setLanguage = (nextLanguage) => {
    const normalized = normalizeLanguageCode(nextLanguage);
    setLanguageState(normalized);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      languages: getAllLanguages(),
      content,
    }),
    [content, language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
