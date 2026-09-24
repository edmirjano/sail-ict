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
  ExternalLink,
  Clock,
  ArrowRight
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import CookieConsent from '../../components/CookieConsent';
import LegalModal from '../../components/LegalModal';
import useLegalModal from '../../hooks/useLegalModal';
import useLocalePath from '../../hooks/useLocalePath';
import Logo from '../../components/Logo';

export default function HomePage() {
  const t = useTranslations();
  const { page } = useLocalePath();
  const { isOpen, modalType, closeModal, openTerms, openPrivacy, openCookies } = useLegalModal();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Header />

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

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              {t('Projects.title')}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16">
              {t('Projects.subtitle')}
            </p>

            {/* Dragonfly-Agri */}
            <div className="bg-white p-6 md:p-8 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">
                {t('Projects.dragonfly_title')}
              </h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-600 mt-2 mb-6">
                <span className="flex items-center text-sm">
                  <LocationIcon className="w-4 h-4 mr-1" />
                  {t('Projects.dragonfly_location')}
                </span>
                <span className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {t('Projects.dragonfly_duration')}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('Projects.dragonfly_teaser')}
              </p>
              <a
                href={page('projects')}
                className="flex sm:inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {t('Projects.read_more')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
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
      <Footer 
        onOpenTerms={openTerms} 
        onOpenPrivacy={openPrivacy} 
        onOpenCookies={openCookies} 
      />

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
