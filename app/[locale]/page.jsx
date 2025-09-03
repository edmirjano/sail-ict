'use client';

import { getTranslations } from 'next-intl/server';
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
import { useState } from 'react';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const navbarTranslations = {
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    cta: 'Get Started'
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
                <p className="text-xs text-blue-400 font-mono">Innovating Tomorrow's Technology</p>
              </div>
            </div>
            
            <DesktopNav translations={navbarTranslations} />
            <MobileNav translations={navbarTranslations} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://placehold.co/1920x1080/1f2937/ffffff?text=Technology+Background)',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Empowering Your Digital Future
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              We deliver cutting-edge technology solutions that transform businesses and drive innovation in the digital age.
            </p>
            <a 
              href="#services" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Code2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Custom Software Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tailored software solutions designed to meet your specific business needs and requirements.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Factory className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Digital Transformation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic guidance and implementation to modernize your business processes and technology infrastructure.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <Briefcase className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-900 mb-4">
                IT Consulting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Expert advice on technology strategy, architecture, and best practices to optimize your IT operations.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Web & Mobile Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Modern, responsive web applications and mobile apps that engage users and drive business growth.
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
              About Us
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                  Your Technology Partner
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are a team of passionate technology professionals dedicated to helping businesses thrive in the digital economy. With years of experience and deep expertise, we deliver innovative solutions that drive real business value.
                </p>
              </div>
              
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Globe className="w-24 h-24 mx-auto mb-4 opacity-80" />
                    <p className="text-xl font-semibold">Innovation Hub</p>
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
            Get In Touch
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
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">ilirshinko@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+355 67 203 3918</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">Tirane, Tirane, Rruga Jorgji Kushi, Kompleksi Klensi, God.4, Kati 3, Ap.28</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('Contact.form_name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('Contact.form_name')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('Contact.form_email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('Contact.form_email')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('Contact.form_message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('Contact.form_message')}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : t('Contact.form_cta')}
                  </button>
                  
                  {submitStatus && (
                    <div className={`text-center p-3 rounded-lg ${
                      submitStatus.success 
                        ? 'bg-green-100 text-green-700 border border-green-200' 
                        : 'bg-red-100 text-red-700 border border-red-200'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                Your strategic partner in technology, providing innovative solutions for the future.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
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
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>ilirshinko@gmail.com</p>
                <p>+355 67 203 3918</p>
                <p>Tirane, Tirane, Rruga Jorgji Kushi, Kompleksi Klensi, God.4, Kati 3, Ap.28</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">{t('Footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/*
DEPLOYMENT INSTRUCTIONS FOR NETLIFY:

1. Push your code to a Git provider (GitHub, GitLab, or Bitbucket):
   - Initialize git: git init
   - Add files: git add .
   - Commit: git commit -m "Initial commit"
   - Add remote: git remote add origin <your-repo-url>
   - Push: git push -u origin main

2. Connect to Netlify:
   - Go to netlify.com and sign in
   - Click "New site from Git"
   - Choose your Git provider and select your repository
   - Set build command: next build
   - Set publish directory: .next
   - Click "Deploy site"

3. Environment Variables:
   - No special environment variables are needed for this setup
   - The internationalization will work automatically based on user location

4. Build Settings:
   - Build command: next build
   - Publish directory: .next
   - Node version: 18.x or higher (Netlify will auto-detect)

5. Post-deployment:
   - Your site will be available at your Netlify URL
   - Users will automatically see content in their preferred language
   - Manual language switching via URL: /sq for Albanian, /it for Italian, /en for English
*/