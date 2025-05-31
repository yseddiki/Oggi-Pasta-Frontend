// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove any previous i18n configuration if you had one
  // The middleware will handle internationalization routing
};

export default withNextIntl(nextConfig);