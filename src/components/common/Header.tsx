"use client";

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
// Assuming HeaderMenuItem is defined elsewhere or mocked. For this single file update, 
// we'll include a simple mock for completeness.

const HeaderMenuItem = ({ text, href }: { text: string, href: string }) => {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent default anchor behavior (instant jump)
    e.preventDefault(); 
    
    // Extract the target ID (e.g., "#home")
    const targetId = href.startsWith('#') ? href.substring(1) : href;
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Use the element's scrollIntoView method for native smooth scrolling
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: Use the default anchor behavior if element not found
      window.location.href = href;
    }
  };
  
  return (
    <a 
      href={href} 
      onClick={handleClick} // Added custom click handler for smooth scroll
      // UPDATED: Changed hover color to yellow (#f3e16c)
      className="text-[#151538] text-[18px] sm:text-[27px] lg:text-[36px] font-normal leading-[26px] sm:leading-[40px] lg:leading-[53px] text-center transition-colors hover:text-[#f3e16c] block w-full lg:w-auto p-2 lg:p-0"
    >
      {text}
    </a>
  );
};


interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { text: "Home", href: "#hero" },
    { text: "Today Menu", href: "#menu" },
    { text: "About Us", href: "#about" },
    { text: "Contact Us", href: "#contact" }
  ]

  return (
    <header className={twMerge(
      // The scroll-smooth property on the header is good practice but we'll primarily rely on JS for smooth scroll here.
      'w-full bg-transparent z-40 scroll-smooth', 
      'mt-[33px] sm:mt-[50px] md:mt-[58px] lg:mt-[66px]',
      className
    )}>
      {/* Outer container remains full-width without padding */}
      <div className="w-full max-w-[1440px] mx-auto"> 
        
        {/* Inner row for content (Hamburger icon on mobile, empty space on desktop) */}
        <div className="flex items-center justify-end py-4 px-4 sm:px-6 lg:px-8">
          
          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="lg:hidden p-2" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6 text-[#151538]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation - UPDATED: justify-center for web view */}
          <nav className="hidden lg:flex items-center justify-center gap-[23px] sm:gap-[35px] md:gap-[40px] lg:gap-[46px] w-full">
            {menuItems.map((item, index) => (
              <HeaderMenuItem
                key={index}
                text={item.text}
                href={item.href}
              />
            ))}
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={twMerge(
          'lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white',
          menuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        )}>
          {/* Mobile menu links container - UPDATED: justify-end to align links to the right */}
          <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200 px-4 items-end">
            {menuItems.map((item, index) => (
              <HeaderMenuItem
                key={index}
                text={item.text}
                href={item.href}
              />
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
