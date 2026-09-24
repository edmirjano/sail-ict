'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function MobileNav({ links, cta }) {
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
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-white hover:text-blue-400 transition-colors">
                {link.label}
              </a>
            ))}
            <a
              href={cta.href}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              {cta.label}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
