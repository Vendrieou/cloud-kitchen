import NextLink from'next/link';
import { twMerge } from 'tailwind-merge';
import { AnchorHTMLAttributes, ReactNode, CSSProperties } from 'react';

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  // Required parameters
  href: string;
  
  // Optional styling parameters
  text_color?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_decoration?: string;
  
  // Optional layout parameters
  layout_width?: string;
  padding?: string;
  margin?: string;
  position?: string;
  
  // Standard React props
  children?: ReactNode;
  external?: boolean;
  underline?: boolean;
}

const Link = ({
  // Required parameters
  href,
  
  // Optional styling parameters with defaults
  text_color = "text-link-text",
  text_font_size = "text-md",
  text_font_family = "Indie Flower",
  text_font_weight = "font-normal",
  text_line_height = "leading-md",
  text_text_align = "left",
  text_decoration = "none",
  
  // Optional layout parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  children,
  external = false,
  underline = false,
  className,
  ...props
}: LinkProps) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles: CSSProperties = {
    ...(text_font_family && !text_font_family.startsWith('font-') && { fontFamily: text_font_family }),
  }

  // Build Tailwind classes for styling
  const styleClasses = [
    text_color,
    text_font_size,
    text_font_family.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    `text-${text_text_align}`,
    text_decoration === 'underline' || underline ? 'underline' : 'no-underline',
    'transition-all duration-200',
    'hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2',
  ].filter(Boolean).join(' ')

  const linkProps = {
    style: customStyles,
    className: twMerge(
      styleClasses,
      optionalClasses,
      className
    ),
    ...props
  }

  // External link
  if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...linkProps}
      >
        {children}
      </a>
    )
  }

  // Internal link using Next.js Link
  return (
    <NextLink href={href} {...linkProps}>
      {children}
    </NextLink>
  )
}

export default Link