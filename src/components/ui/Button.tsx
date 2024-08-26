import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  uppercase?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  uppercase = true,
  className,
}) => {
  const baseStyles =
    'font-medium rounded-[10px] focus:outline-none transition-all';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-secondary text-white hover:bg-grey-default',
    tertiary: 'bg-transparent text-primary hover:bg-primary-light',
    outlined:
      'bg-transparent border border-primary text-primary hover:bg-primary-light',
  };

  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'w-[170px] h-[52px] text-lg font-semibold',
    large: 'px-14 h-14 text-lg font-semibold',
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        { 'opacity-50  cursor-not-allowed': disabled },
        { uppercase: uppercase },
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
