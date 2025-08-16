
'use client';

import { createContext, useState, useContext, ReactNode } from 'react';
import { translations, getDictionary, LanguageCode, defaultLang, Dictionary, DictionaryKey } from '@/lib/i18n';

interface LanguageContextType {
  language: LanguageCode;
  dictionary: Dictionary;
  setLanguage: (language: LanguageCode) => void;
  t: (key: DictionaryKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageCode>(defaultLang);
  const [dictionary, setDictionary] = useState<Dictionary>(translations[defaultLang]);

  const handleSetLanguage = (newLang: LanguageCode) => {
    setLanguage(newLang);
    setDictionary(getDictionary(newLang));
  };

  const t = (key: DictionaryKey) => {
    return dictionary[key] || translations[defaultLang][key];
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, dictionary, t }}>
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

    