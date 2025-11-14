import React from 'react';
import { CgSpinner } from 'react-icons/cg';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  icon?: React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'primary', isLoading = false, icon, ...props }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100';

    const variantClasses = {
      primary:
        'border-transparent text-white bg-gradient-to-r from-bright-purple to-bright-blue hover:from-bright-purple/90 hover:to-bright-blue/90 focus:ring-bright-purple shadow-lg shadow-purple-300/50',
      secondary:
        'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-bright-purple',
    };

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <CgSpinner className="h-5 w-5 animate-spin" />
        ) : (
          icon
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;