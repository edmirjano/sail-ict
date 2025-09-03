'use client';

import { useTranslations } from 'next-intl';
import { 
  Code2, 
  Factory, 
  Briefcase, 
  Globe, 
  Mail, 
  Phone, 
  MapPin
} from 'lucide-react';
import MobileNav from '../../components/MobileNav';
import ContactForm from '../../components/ContactForm';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import CookieConsent from '../../components/CookieConsent';
import LegalModal from '../../components/LegalModal';
import useLegalModal from '../../hooks/useLegalModal';

// Desktop Navigation Component
function DesktopNav({ translations }) {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <a href="#home" className="text-white hover:text-blue-400 transition-colors">
        {translations.home}
      </a>
      <a href="#services" className="text-white hover:text-blue-400 transition-colors">
        {translations.services}
      </a>
      <a href="#about" className="text-white hover:text-blue-400 transition-colors">
        {translations.about}
      </a>
      <a href="#contact" className="text-white hover:text-blue-400 transition-colors">
        {translations.contact}
      </a>
      <a 
        href="#contact" 
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {translations.cta}
      </a>
    </nav>
  );
}

export default function HomePage() {
  const t = useTranslations();
  const { isOpen, modalType, closeModal, openTerms, openPrivacy, openCookies } = useLegalModal();

  const navbarTranslations = {
    home: t('Navbar.home'),
    services: t('Navbar.services'),
    about: t('Navbar.about'),
    contact: t('Navbar.contact'),
    cta: t('Navbar.cta')
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Sail-ICT</h1>
                <p className="text-xs text-blue-400 font-mono">{t('Hero.tagline')}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <DesktopNav translations={navbarTranslations} />
              <LanguageSwitcher />
            </div>
            <MobileNav translations={navbarTranslations} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800"
        >
          {/* Technology Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='53' cy='7' r='2'/%3E%3Ccircle cx='7' cy='53' r='2'/%3E%3Ccircle cx='53' cy='53' r='2'/%3E%3Cpath d='M30 7h-3v46h3zM7 30v-3h46v3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}
            ></div>
            {/* Floating geometric shapes */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rotate-45 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-20 w-5 h-5 bg-green-400 rotate-12 animate-pulse"></div>
            <div className="absolute bottom-40 right-10 w-8 h-8 border-2 border-cyan-400 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
          </div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('Hero.headline')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              {t('Hero.subheading')}
            </p>
            <a 
              href="#services" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
            >
              {t('Hero.cta')}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            {t('Services.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Code2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('Services.service1_title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('Services.service1_desc')}
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Factory className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('Services.service2_title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('Services.service2_desc')}
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <Briefcase className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('Services.service3_title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('Services.service3_desc')}
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('Services.service4_title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('Services.service4_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              {t('About.title')}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                  {t('About.headline')}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('About.text')}
                </p>
              </div>
              
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Globe className="w-24 h-24 mx-auto mb-4 opacity-80" />
                    <p className="text-xl font-semibold">{t('Common.innovation_hub')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            {t('Contact.title')}
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{t('Contact.email_label')}</h3>
                      <a href="mailto:ilirshinko@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                        ilirshinko@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{t('Contact.phone_label')}</h3>
                      <a href="tel:+355672033918" className="text-blue-600 hover:text-blue-800 transition-colors">
                        +355 67 203 3918
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{t('Contact.address_label')}</h3>
                      <p className="text-gray-600">Tirane, Tirane, Rruga Jorgji Kushi, Kompleksi Klensi, God.4, Kati 3, Ap.28</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
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
                <a href="#home" className="block text-gray-400 hover:text-white transition-colors">
                  {t('Navbar.home')}
                </a>
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors">
                  {t('Navbar.services')}
                </a>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">
                  {t('Navbar.about')}
                </a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
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
                  onClick={openTerms}
                  className="block text-gray-400 hover:text-white transition-colors text-left"
                >
                  {t('Legal.terms_title')}
                </button>
                <button 
                  onClick={openPrivacy}
                  className="block text-gray-400 hover:text-white transition-colors text-left"
                >
                  {t('Legal.privacy_title')}
                </button>
                <button 
                  onClick={openCookies}
                  className="block text-gray-400 hover:text-white transition-colors text-left"
                >
                  {t('Legal.cookies_title')}
                </button>
              </nav>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">{t('Footer.copyright')}</p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Popup */}
      <CookieConsent onOpenCookiePolicy={openCookies} />

      {/* Legal Modals */}
      <LegalModal 
        isOpen={isOpen} 
        onClose={closeModal} 
        type={modalType} 
      />
    </div>
  );
}
