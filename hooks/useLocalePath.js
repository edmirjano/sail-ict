import { useLocale } from 'next-intl';

// English is the default locale and has no URL prefix (localePrefix: 'as-needed')
export default function useLocalePath() {
  const locale = useLocale();
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const home = prefix || '/';

  return {
    home,
    // Link to a section on the home page, e.g. section('events') -> /sq#events
    section: (id) => `${home}#${id}`,
    // Link to another page, e.g. page('projects') -> /sq/projects
    page: (path) => `${prefix}/${path}`
  };
}
