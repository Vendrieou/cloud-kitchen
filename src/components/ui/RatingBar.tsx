'use client';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';

interface RatingBarProps {
  // Optional parameters
  layout_width?: string;
  position?: string;
  
  // Rating specific props
  rating?: number;
  maxRating?: number;
  size?: 'small' | 'medium' | 'large';
  readonly?: boolean;
  onRatingChange?: (rating: number) => void;
  className?: string;
  showValue?: boolean;
  color?: string;
  emptyColor?: string;
}

const RatingBar = ({
  // Optional parameters (no defaults)
  layout_width,
  position,
  
  // Rating specific props with defaults
  rating = 0,
  maxRating = 5,
  size = 'medium',
  readonly = false,
  onRatingChange,
  className,
  showValue = false,
  color = '#f3e16c',
  emptyColor = '#d9d9d9',
}: RatingBarProps) => {
  const [hoverRating, setHoverRating] = useState<number>(0)
  const [currentRating, setCurrentRating] = useState<number>(rating)

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : 'w-auto',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Size mappings
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  }

  const handleStarClick = (starIndex: number) => {
    if (readonly) return
    
    const newRating = starIndex + 1
    setCurrentRating(newRating)
    
    if (onRatingChange) {
      onRatingChange(newRating)
    }
  }

  const handleStarHover = (starIndex: number) => {
    if (readonly) return
    setHoverRating(starIndex + 1)
  }

  const handleMouseLeave = () => {
    if (readonly) return
    setHoverRating(0)
  }

  const getStarColor = (starIndex: number) => {
    const displayRating = hoverRating || currentRating
    return starIndex < displayRating ? color : emptyColor
  }

  return (
    <div 
      className={twMerge(
        'flex items-center gap-1',
        optionalClasses,
        className
      )}
      onMouseLeave={handleMouseLeave}
      role="radiogroup"
      aria-label={`Rating: ${currentRating} out of ${maxRating} stars`}
    >
      {Array.from({ length: maxRating }, (_, index) => (
        <button
          key={index}
          type="button"
          className={twMerge(
            sizeClasses[size],
            'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-1',
            readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'
          )}
          onClick={() => handleStarClick(index)}
          onMouseEnter={() => handleStarHover(index)}
          disabled={readonly}
          aria-label={`Rate ${index + 1} star${index + 1 !== 1 ? 's' : ''}`}
          role="radio"
          aria-checked={index < currentRating}
        >
          <svg
            viewBox="0 0 24 24"
            fill={getStarColor(index)}
            className="w-full h-full"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </button>
      ))}
      
      {showValue && (
        <span className="ml-2 text-sm text-text-primary font-medium">
          {currentRating}/{maxRating}
        </span>
      )}
    </div>
  )
}

export default RatingBar