import Link from'next/link';
import { twMerge } from 'tailwind-merge';

interface HeaderMenuItemProps {
  text: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const HeaderMenuItem = ({ 
  text, 
  href = "#", 
  className,
  onClick 
}: HeaderMenuItemProps) => {
  const baseClasses = "text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-normal leading-[26px] sm:leading-[35px] md:leading-[44px] lg:leading-[53px] text-header-text hover:text-primary-background transition-colors duration-200"

  if (href && href !== "#") {
    return (
      <Link 
        href={href}
        className={twMerge(baseClasses, className)}
        onClick={onClick}
      >
        {text}
      </Link>
    )
  }

  return (
    <button
      className={twMerge(baseClasses, "cursor-pointer", className)}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default HeaderMenuItem