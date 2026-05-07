import es from './es.json';
import en from './en.json';

export type Locale = 'es' | 'en';

const translations = { es, en };

export function getLang(url: URL): Locale {
  if (url.pathname.startsWith('/en')) return 'en';
  return 'es';
}

export function useTranslations(lang: Locale) {
  return translations[lang];
}

export function getLocalePath(path: string, lang: Locale): string {
  if (lang === 'es') return path;
  return `/en${path}`;
}
