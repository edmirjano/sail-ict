'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Logo from './Logo';
import useLocalePath from '../hooks/useLocalePath';

export default function Footer({ onOpenTerms, onOpenPrivacy, onOpenCookies }) {
  const t = useTranslations();
  const { section } = useLocalePath();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Logo className="w-10 h-10 text-white" />
              <div>
                <h3 className="text-xl font-bold">Sail-ICT</h3>
                <p className="text-sm text-blue-400 font-mono">{t('Hero.tagline')}</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              {t('Footer.description')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('Common.quick_links')}</h4>
            <nav className="space-y-2">
              <a href={section('home')} className="block text-gray-400 hover:text-white transition-colors">
                {t('Navbar.home')}
              </a>
              <a href={section('services')} className="block text-gray-400 hover:text-white transition-colors">
                {t('Navbar.services')}
              </a>
              <a href={section('about')} className="block text-gray-400 hover:text-white transition-colors">
                {t('Navbar.about')}
              </a>
              <a href={section('events')} className="block text-gray-400 hover:text-white transition-colors">
                {t('Events.title')}
              </a>
              <a href={section('products')} className="block text-gray-400 hover:text-white transition-colors">
                {t('Products.title')}
              </a>
              <a href={section('contact')} className="block text-gray-400 hover:text-white transition-colors">
                {t('Navbar.contact')}
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('Navbar.contact')}</h4>
            <div className="space-y-2 text-gray-400">
              <a href="mailto:ilirshinko@gmail.com" className="block text-gray-400 hover:text-white transition-colors">
                ilirshinko@gmail.com
              </a>
              <a href="tel:+355672033918" className="block text-gray-400 hover:text-white transition-colors">
                +355 67 203 3918
              </a>
              <p>Tirane, Tirane, Rruga Jorgji Kushi, Kompleksi Klensi, God.4, Kati 3, Ap.28</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <nav className="space-y-2">
              <button
                onClick={onOpenTerms}
                className="block text-gray-400 hover:text-white transition-colors text-left"
              >
                {t('Legal.terms_title')}
              </button>
              <button
                onClick={onOpenPrivacy}
                className="block text-gray-400 hover:text-white transition-colors text-left"
              >
                {t('Legal.privacy_title')}
              </button>
              <button
                onClick={onOpenCookies}
                className="block text-gray-400 hover:text-white transition-colors text-left"
              >
                {t('Legal.cookies_title')}
              </button>
            </nav>
          </div>
        </div>

        {/* Supported by */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-xs text-gray-500 tracking-widest uppercase mb-4">
            {t('Projects.supported_by')}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <a
              href="https://startupalbania.gov.al/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3"
            >
              <Image
                src="/startup-albania.png"
                alt=""
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                {t('Projects.startup_albania')}
              </span>
            </a>
            <a
              href="https://ekonomia.gov.al/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3"
            >
              <Image
                src="/ministria.png"
                alt=""
                width={785}
                height={805}
                className="h-9 w-auto rounded-sm"
              />
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                {t('Projects.ministry')}
              </span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">{t('Footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
