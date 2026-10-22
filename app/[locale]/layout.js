import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { SITE_URL, locales, alternates } from '../../lib/seo';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    metadataBase: new URL(SITE_URL),
    title: 'Sail-ICT - Navigating Innovation, Engineering the Future',
    description: 'We specialize in creating advanced software solutions, complete IT systems, and industrial automation to empower your business.',
    icons: {
      icon: '/favicon.svg',
    },
    // Home page alternates; nested pages override with their own layout
    alternates: alternates(locale),
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }
  
  const messages = await getMessages({ locale });
  
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
