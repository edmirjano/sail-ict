export const SITE_URL = 'https://sail-ict.com';
export const locales = ['en', 'sq', 'it'];

// English is the default locale and has no URL prefix (localePrefix: 'as-needed')
export function localeUrl(locale, path = '') {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return `${SITE_URL}${prefix}${path ? `/${path}` : ''}`;
}

export function alternates(locale, path = '') {
  return {
    canonical: localeUrl(locale, path),
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, localeUrl(l, path)])),
      'x-default': localeUrl('en', path)
    }
  };
}
