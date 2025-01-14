// src/components/Button.tsx
import React from 'react';
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'default' | 'outline';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, variant = 'default', ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
    const variantStyles = {
      default: '',
      outline: 'border border-current'
    };

    return (
      <Comp
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";