// src/i18n/routing.js
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'nl'],
  
  // Used when no locale matches - this will redirect / to /en
  defaultLocale: 'en',

  // Add this to routing.js if you want browser language detection
  localeDetection: true,
    
    // Always show locale prefix in URL
    localePrefix: 'always',
    
    pathnames: {
      '/': '/',
      '/menu': {
        en: '/menu',
        fr: '/menu',
        nl: '/menu'
      },
      '/entreprise': {
        en: '/enterprise',
        fr: '/entreprise', 
        nl: '/bedrijf'
      }
    }
  });