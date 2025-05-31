// src/i18n/request.js
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale)) {
    // Default to 'en' if locale is not supported
    locale = 'en';
  }

  // Import the translations for the current locale
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    // Fallback to English if translation file doesn't exist
    messages = (await import(`../../messages/en.json`)).default;
  }

  return {
    locale,
    messages,
    // You can also provide other configuration here
    timeZone: 'Europe/Brussels', // Since you're in Belgium
  };
});