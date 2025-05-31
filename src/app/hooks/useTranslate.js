// src/app/hooks/useTranslate.js
"use client";

import { useLocale } from 'next-intl';

export const useTranslate = () => {
  const locale = useLocale();
  
  const translate = (translationObject, fallback = "") => {
    // If locale === 'fr' => translate to French
    if (locale === 'fr' && translationObject.fr) {
      return translationObject.fr;
    }
    
    // If locale === 'nl' => translate to Dutch
    if (locale === 'nl' && translationObject.nl) {
      return translationObject.nl;
    }
    
    // Default to English or fallback
    return translationObject.en || fallback;
  };
  
  return { translate, locale };
};

// Alternative simplified version using the hook
export default function useSimpleTranslate() {
  const locale = useLocale();
  
  return (translations) => {
    if (locale === 'fr') return translations.fr;
    if (locale === 'nl') return translations.nl;
    return translations.en;
  };
}