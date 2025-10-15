import { twMerge } from 'tailwind-merge';
import { InputHTMLAttributes, forwardRef } from 'react';

interface EditTextProps extends InputHTMLAttributes<HTMLInputElement> {
  // Required parameters with defaults
  fill_background_color?: string;
  border_border_radius?: string;
  
  // Optional parameters
  layout_width?: string;
  padding?: string;
  position?: string;
  margin?: string;
  
  // Additional props
  label?: string;
  error?: string;
  helperText?: string;
}

const EditText = forwardRef<HTMLInputElement, EditTextProps>(({
  // Required parameters with defaults
  fill_background_color = "bg-input-background",
  border_border_radius = "rounded-sm",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  margin,
  
  // Additional props
  label,
  error,
  helperText,
  className,
  disabled = false,
  ...props
}, ref) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPadding ? `p-[${padding}]` : 'px-3 py-2',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Build Tailwind classes for styling
  const baseClasses = [
    fill_background_color,
    border_border_radius,
    'border border-neutral-background',
    'text-text-primary',
    'placeholder:text-text-secondary/60',
    'focus:outline-none focus:ring-2 focus:ring-primary-background focus:border-transparent',
    'transition-all duration-200',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    error ? 'border-red-500 focus:ring-red-500' : '',
  ].filter(Boolean).join(' ')

  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label className="text-sm font-medium text-text-primary">
          {label}
        </label>
      )}
      <input
        ref={ref}
        disabled={disabled}
        className={twMerge(
          baseClasses,
          optionalClasses,
          className
        )}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined}
        {...props}
      />
      {error && (
        <span id={`${props.id}-error`} className="text-sm text-red-500">
          {error}
        </span>
      )}
      {helperText && !error && (
        <span id={`${props.id}-helper`} className="text-sm text-text-secondary/70">
          {helperText}
        </span>
      )}
    </div>
  )
})

EditText.displayName = 'EditText'

export default EditText