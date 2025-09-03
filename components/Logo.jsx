import React from 'react';

const Logo = ({ className = "w-10 h-10", showText = false, textSize = "text-xl" }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Symbol - with explicit container boundaries */}
      <div 
        className="logo-container relative flex-shrink-0" 
        style={{ 
          width: 'inherit', 
          height: 'inherit',
          maxWidth: '100%',
          maxHeight: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Main circular design */}
        <svg 
          viewBox="0 0 60 60" 
          width="100%"
          height="100%"
          fill="currentColor"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
            position: 'relative',
            overflow: 'visible'
          }}
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
          
          {/* Small dots above and on sides - moved inside SVG */}
          <circle cx="30" cy="1" r="1" fill="currentColor"/>
          <circle cx="1" cy="30" r="1" fill="currentColor"/>
          <circle cx="59" cy="30" r="1" fill="currentColor"/>
        </svg>
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
