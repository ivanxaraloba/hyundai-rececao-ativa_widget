import React from 'react';

import { cn } from '@/lib/utils';

export default function Dot({
  className,
  ...props
}: {
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      readOnly
      className={cn(
        'rounded-full truncate bg-gray-600 focus:z-10 transition-transform size-6 text-xs text-center text-primary-foreground',
        'outline-none ring-0 cursor-pointer',
        className,
      )}
      {...props}
    />
  );
}
