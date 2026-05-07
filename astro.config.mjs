import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://inusual-labs.com',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
