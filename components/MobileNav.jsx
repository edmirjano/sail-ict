'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function MobileNav({ translations }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-white hover:text-blue-400 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700">
          <nav className="flex flex-col p-4 space-y-4">
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
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              {translations.cta}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
