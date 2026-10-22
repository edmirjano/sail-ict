import { locales, localeUrl, alternates } from '../lib/seo';

const paths = ['', 'projects'];

export default function sitemap() {
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: localeUrl(locale, path),
      alternates: { languages: alternates(locale, path).languages }
    }))
  );
}
