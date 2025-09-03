import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'sq', 'it'],

  // Used when no locale matches
  defaultLocale: 'en',
  
  // The `localePrefix` strategy sets the locale in the URL path.
  // This is recommended for SEO.
  localePrefix: 'as-needed' 
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(it|sq|en)/:path*']
};
