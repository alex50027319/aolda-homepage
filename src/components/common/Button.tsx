import Icon from './Icon';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-3 font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
    secondary: 'bg-white text-primary-500 border border-primary-500 hover:bg-gray-50 focus:ring-primary-500',
    outline: 'bg-transparent text-primary-500 border border-primary-500 hover:bg-primary-50 focus:ring-primary-500',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm rounded-lg',
    md: 'px-4 py-3 text-base rounded-2xl',
    lg: 'px-6 py-4 text-lg rounded-2xl',
  };

  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
      )}
      {icon && iconPosition === 'left' && !loading && (
        <Icon name={icon} size={iconSize} aria-hidden="true" />
      )}
      {children}
      {icon && iconPosition === 'right' && !loading && (
        <Icon name={icon} size={iconSize} aria-hidden="true" />
      )}
    </button>
  );
}
