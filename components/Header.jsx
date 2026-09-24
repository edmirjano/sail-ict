'use client';

import { useTranslations } from 'next-intl';
import MobileNav from './MobileNav';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';
import useLocalePath from '../hooks/useLocalePath';

// Desktop Navigation Component
function DesktopNav({ links, cta }) {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="text-white hover:text-blue-400 transition-colors">
          {link.label}
        </a>
      ))}
      <a
        href={cta.href}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {cta.label}
      </a>
    </nav>
  );
}

// minimal: logo (linking home) and language switcher only, without the section links
export default function Header({ minimal = false }) {
  const t = useTranslations();
  const { home, section, page } = useLocalePath();

  const links = [
    { href: section('home'), label: t('Navbar.home') },
    { href: section('services'), label: t('Navbar.services') },
    { href: section('about'), label: t('Navbar.about') },
    { href: section('events'), label: t('Events.title') },
    { href: section('products'), label: t('Products.title') },
    { href: page('projects'), label: t('Navbar.projects') },
    { href: section('contact'), label: t('Navbar.contact') }
  ];
  const cta = { href: section('contact'), label: t('Navbar.cta') };

  const brand = (
    <>
      <Logo className="w-10 h-10 text-white" />
      <div>
        <h1 className="text-xl font-bold text-white">Sail-ICT</h1>
        <p className="text-xs text-blue-400 font-mono">{t('Hero.tagline')}</p>
      </div>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {minimal ? (
            <a href={home} className="flex items-center space-x-3">
              {brand}
            </a>
          ) : (
            <div className="flex items-center space-x-3">
              {brand}
            </div>
          )}

          <div className="flex items-center space-x-4">
            {!minimal && <DesktopNav links={links} cta={cta} />}
            <LanguageSwitcher />
          </div>
          {!minimal && <MobileNav links={links} cta={cta} />}
        </div>
      </div>
    </header>
  );
}
