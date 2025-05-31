// src/app/components/DynamicTranslator.js
"use client";

import { useLocale } from 'next-intl';

const DynamicTranslator = ({ translations, fallback = "" }) => {
  const locale = useLocale();
  
  // If locale is 'fr', translate to French
  if (locale === 'fr' && translations.fr) {
    return translations.fr;
  }
  
  // If locale is 'nl', translate to Dutch
  if (locale === 'nl' && translations.nl) {
    return translations.nl;
  }
  
  // Default to English or fallback
  return translations.en || fallback;
};

export default DynamicTranslator;