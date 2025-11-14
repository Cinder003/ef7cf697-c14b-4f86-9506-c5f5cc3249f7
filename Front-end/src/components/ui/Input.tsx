import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  error?: string;
  icon?: React.ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, icon, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <div className="relative rounded-md shadow-sm">
          {icon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">{icon}</span>
            </div>
          )}
          <input
            id={id}
            ref={ref}
            className={`block w-full rounded-lg border-gray-300 bg-white/80 ${icon ? 'pl-10' : 'pl-4'} pr-4 py-2 text-gray-900 placeholder-gray-400 focus:border-bright-purple focus:outline-none focus:ring-2 focus:ring-bright-purple/50 transition duration-150 ease-in-out sm:text-sm ${error ? 'border-red-500 ring-red-500' : ''}`}
            {...props}
          />
        </div>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;