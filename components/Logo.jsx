import React from 'react';

const Logo = ({ className = "w-10 h-10", showText = false, textSize = "text-xl" }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Symbol */}
      <div className="relative flex-shrink-0">
        {/* Main circular design */}
        <svg 
          viewBox="0 0 60 60" 
          className="w-full h-full"
          fill="currentColor"
        >
          {/* Large circle background */}
          <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2"/>
          
          {/* Central dot */}
          <circle cx="30" cy="30" r="2" fill="currentColor"/>
          
          {/* Eight radial lines */}
          <line x1="30" y1="2" x2="30" y2="30" stroke="currentColor" strokeWidth="1"/>
          <line x1="30" y1="30" x2="30" y2="58" stroke="currentColor" strokeWidth="1"/>
          <line x1="2" y1="30" x2="30" y2="30" stroke="currentColor" strokeWidth="1"/>
          <line x1="30" y1="30" x2="58" y2="30" stroke="currentColor" strokeWidth="1"/>
          <line x1="8" y1="8" x2="30" y2="30" stroke="currentColor" strokeWidth="1"/>
          <line x1="30" y1="30" x2="52" y2="8" stroke="currentColor" strokeWidth="1"/>
          <line x1="8" y1="52" x2="30" y2="30" stroke="currentColor" strokeWidth="1"/>
          <line x1="30" y1="30" x2="52" y2="52" stroke="currentColor" strokeWidth="1"/>
          
          {/* Four filled triangles pointing to center */}
          <path d="M30 2 L26 30 L34 30 Z" fill="currentColor"/>
          <path d="M30 58 L26 30 L34 30 Z" fill="currentColor"/>
          <path d="M2 30 L30 26 L30 34 Z" fill="currentColor"/>
          <path d="M58 30 L30 26 L30 34 Z" fill="currentColor"/>
        </svg>
        
        {/* Small dots above and on sides */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-current rounded-full"></div>
        <div className="absolute left-1 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-current rounded-full"></div>
        <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-current rounded-full"></div>
      </div>
      
      {/* Text if showText is true */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center space-x-1">
            <span className={`font-bold text-current ${textSize}`}>SAIL</span>
            <span className="w-1 h-1 bg-current rounded-full"></span>
            <span className={`font-bold text-current ${textSize}`}>ICT</span>
          </div>
          <p className="text-xs text-current font-mono uppercase tracking-wide">
            Navigating Innovation, Engineering the Future
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;
