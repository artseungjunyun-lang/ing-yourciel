
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 py-6 ${
        isScrolled ? 'bg-white/80 backdrop-blur-2xl border-b border-gray-50 py-4 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="hidden md:flex gap-10 items-center text-[11px] font-bold tracking-[0.3em] text-gray-500">
          <a href="#about" className="hover:text-[#82C1F5] transition-colors uppercase">About Us</a>
          <a href="#packages" className="hover:text-[#82C1F5] transition-colors uppercase">Packages</a>
        </div>

        <a href="#home" className="flex flex-col items-center group">
          <span className="font-yaro text-xl md:text-2xl tracking-[0.1em] text-[#82C1F5] group-hover:opacity-80 transition-all duration-500 animate-logo-wiggle uppercase">
            YOURCIEL
          </span>
        </a>

        <div className="flex gap-10 items-center text-[11px] font-bold tracking-[0.3em] text-gray-500">
          <a href="#gallery" className="hidden md:block hover:text-[#82C1F5] transition-colors uppercase">Gallery</a>
          <a href="#contact" className="hover:text-[#82C1F5] transition-colors uppercase">Booking</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
