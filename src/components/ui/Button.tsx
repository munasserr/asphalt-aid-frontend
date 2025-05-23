import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        primary: "bg-primary text-text-white hover:bg-primary-800 focus-visible:ring-primary-500 shadow-soft hover:shadow-elevation",
        secondary: "bg-secondary text-text-white hover:bg-secondary-600 focus-visible:ring-secondary-500 shadow-soft hover:shadow-elevation",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-text-white",
        ghost: "hover:bg-primary-100 text-primary hover:text-primary-900",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-9 px-3",
        default: "h-11 px-6",
        lg: "h-12 px-8",
        xl: "h-14 px-10 text-base",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, loading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, fullWidth, className })}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <div className={loading ? "opacity-0" : "flex items-center gap-2"}>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </div>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants }; 