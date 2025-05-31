// src/i18n/routing.js
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'nl'],
  
  // Used when no locale matches - this is REQUIRED
  defaultLocale: 'en',

  // Add this to routing.js if you want browser language detection
  localeDetection: true,
    
  // Always show locale prefix in URL
  localePrefix: 'always'
  
  // Remove custom pathnames for now to avoid conflicts
  // pathnames: {
  //   '/': '/',
  //   '/menu': '/menu',
  //   '/entreprise': {
  //     en: '/enterprise',
  //     fr: '/entreprise', 
  //     nl: '/bedrijf'
  //   }
  // }
});