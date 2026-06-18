'use client';

import { twMerge } from 'tailwind-merge';

interface HeaderMenuItemProps {
  text: string;
  href?: string;
  className?: string;
}

const HeaderMenuItem = ({ 
  text, 
  href = "#", 
  className
}: HeaderMenuItemProps) => {
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

  const baseClasses = "text-[#151538] text-[18px] sm:text-[27px] lg:text-[36px] font-normal leading-[26px] sm:leading-[40px] lg:leading-[53px] text-center transition-colors hover:text-[#f3e16c] block w-full lg:w-auto p-2 lg:p-0"

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={twMerge(baseClasses, className)}
    >
      {text}
    </a>
  )
}

export default HeaderMenuItem