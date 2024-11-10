import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.ComponentProps<'input'> {
  containerClassName?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, containerClassName, rightIcon, leftIcon, ...props }, ref) => {
  return (
    <div className={cn('relative', containerClassName)}>
      {leftIcon && <div className='absolute left-2 top-1/2 transform -translate-y-1/2'>{leftIcon}</div>}

      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
      {rightIcon && <div className='absolute right-2 top-1/2 transform -translate-y-1/2'>{rightIcon}</div>}
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
