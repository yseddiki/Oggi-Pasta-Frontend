// src/i18n/routing.js
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'nl'],
  
  // Used when no locale matches
  defaultLocale: 'en',
  
  // The pathname where users will be redirected when they visit
  // a locale that doesn't have a dedicated domain (Domain Routing only)
  localePrefix: 'always', // Always show locale prefix in URL
  
  // Optional: Define pathnames for each locale if you want different URLs
  // pathnames: {
  //   '/': '/',
  //   '/menu': {
  //     en: '/menu',
  //     fr: '/menu',
  //     nl: '/menu'
  //   },
  //   '/entreprise': {
  //     en: '/enterprise',
  //     fr: '/entreprise', 
  //     nl: '/bedrijf'
  //   }
  // }
});