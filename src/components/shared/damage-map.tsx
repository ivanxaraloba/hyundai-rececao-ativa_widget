import { cn } from '@/lib/utils';
import React from 'react';

interface DamageMapProps {
  children: React.ReactNode;
  image: string;
  onMapClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
  className?: string,
}

export default function DamageMap({
  image,
  children,
  onMapClick,
  className,
}: DamageMapProps) {
  return (
    <div className="border w-fit h-fit">
      <div className="relative flex items-center justify-center min-w-[380px] w-[380px]">
        {/* image */}
        <div onClick={onMapClick} className={cn(className)}>
          <img
            className="min-w-[380px] w-[380px] select-none pointer-events-none"
            src={image}
          />
        </div>
        {/* dots */}
        {children}
      </div>
    </div>
  );
}