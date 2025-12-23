import React from 'react';

interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, onClick, className = '' }) => {
  return (
    <div 
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hamburger icon lines */}
        <path
          d="M3 6H21M3 12H21M3 18H21"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-all duration-300 ${
            isOpen ? 'opacity-0 rotate-45 translate-y-2' : 'opacity-100'
          }`}
        />
        
        {/* Close icon lines (X) */}
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-all duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 -rotate-45'
          }`}
        />
      </svg>
    </div>
  );
};

export default HamburgerIcon;
