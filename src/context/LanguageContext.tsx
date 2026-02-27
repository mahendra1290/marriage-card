import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import en from '../locales/en.json';
import hi from '../locales/hi.json';

type Language = 'en' | 'hi';
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');
  if (lang === 'hi' || lang === 'en') return lang;
  return 'hi';
}

function syncLangToUrl(lang: Language) {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url.toString());
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const [translations, setTranslations] = useState<Translations>(
    getInitialLanguage() === 'hi' ? hi : en
  );

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    syncLangToUrl(lang);
  }, []);

  useEffect(() => {
    setTranslations(language === 'hi' ? hi : en);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k as keyof typeof value];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
