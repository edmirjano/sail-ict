'use client';

import { useTranslations } from 'next-intl';
import { 
  Code2, 
  Factory, 
  Briefcase, 
  Globe, 
  Users,
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  MapPin as LocationIcon,
  ExternalLink
} from 'lucide-react';
import MobileNav from '../../components/MobileNav';
import ContactForm from '../../components/ContactForm';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import CookieConsent from '../../components/CookieConsent';
import LegalModal from '../../components/LegalModal';
import useLegalModal from '../../hooks/useLegalModal';
import Logo from '../../components/Logo';

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
      <a href="#events" className="text-white hover:text-blue-400 transition-colors">
        {translations.events}
      </a>
      <a href="#products" className="text-white hover:text-blue-400 transition-colors">
        {translations.products}
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
    events: t('Events.title'),
    products: t('Products.title'),
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
              <Logo className="w-10 h-10 text-white" />
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
          <div className="max-w-4xl mx-auto mt-10">
            {/* Hero Logo */}
            <div className="flex justify-center mb-8">
              <Logo className="w-24 h-24 text-white" showText={false} textSize="text-3xl" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 mt-6 leading-tight">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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

            {/* Service 5 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('Services.service5_title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('Services.service5_desc')}
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
                    <Logo className="w-24 h-24 text-white opacity-80" showText={false} textSize="text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              {t('Events.title')}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16">
              {t('Events.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* IEEE SoSE 2025 */}
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {t('Events.ieee_sose_title')}
                    </h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <LocationIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">Tirana, Albania</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('Events.ieee_sose_desc')}
                </p>
                <a 
                  href="https://sosengineering.org/2025/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {t('Events.conference_website')}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* IEEE SmartAgri & SuSY 2025 */}
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {t('Events.ieee_smartagri_title')}
                    </h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <LocationIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">Marrakesh, Morocco</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('Events.ieee_smartagri_desc')}
                </p>
                <a 
                  href="https://sysengineering.eu" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {t('Events.event_website')}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              {t('Products.title')}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16">
              {t('Products.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Product 1 */}
              <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('Products.product1_title')}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('Products.product1_desc')}
                </p>
              </div>

              {/* Product 2 */}
              <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('Products.product2_title')}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('Products.product2_desc')}
                </p>
              </div>

              {/* Product 3 */}
              <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('Products.product3_title')}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('Products.product3_desc')}
                </p>
              </div>

              {/* Product 4 */}
              <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('Products.product4_title')}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('Products.product4_desc')}
                </p>
              </div>

              {/* Product 5 */}
              <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('Products.product5_title')}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('Products.product5_desc')}
                </p>
              </div>

              {/* Product 6 */}
              <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('Products.product6_title')}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('Products.product6_desc')}
                </p>
              </div>

              {/* Product 7 */}
              <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('Products.product7_title')}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('Products.product7_desc')}
                </p>
              </div>

              {/* Product 8 */}
              <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('Products.product8_title')}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('Products.product8_desc')}
                </p>
              </div>

              {/* Product 9 */}
              <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('Products.product9_title')}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('Products.product9_desc')}
                </p>
              </div>

              {/* Product 10 */}
              <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('Products.product10_title')}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('Products.product10_desc')}
                </p>
              </div>

              {/* Product 11 */}
              <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-3">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t('Products.product11_title')}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t('Products.product11_desc')}
                    </p>
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
                <a href="#home" className="block text-gray-400 hover:text-white transition-colors">
                  {t('Navbar.home')}
                </a>
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors">
                  {t('Navbar.services')}
                </a>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">
                  {t('Navbar.about')}
                </a>
                <a href="#events" className="block text-gray-400 hover:text-white transition-colors">
                  {t('Events.title')}
                </a>
                <a href="#products" className="block text-gray-400 hover:text-white transition-colors">
                  {t('Products.title')}
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
