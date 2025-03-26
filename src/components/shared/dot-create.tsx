import React from 'react';

import { cn } from '@/lib/utils';
import { DotProps } from '@/types/types.config';

import Dot from '@/components/shared/dot';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface DotCreateProps {
  dot: DotProps;
  onSelect: (newDot: DotProps) => void;
  disabled?: boolean;
}

export default function DotCreate({ dot, onSelect, disabled }: DotCreateProps) {
  const handleInputChange = (field: keyof DotProps, value: string) => {
    onSelect({ ...dot, [field]: value });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          type="button"
          className={cn(disabled && 'pointer-events-none', 'absolute origin-center')}
          style={{
            left: dot.x,
            top: dot.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Popover>
            <PopoverTrigger>
              <Dot className={cn((!dot.id || !dot.name) && 'bg-red-400')} />
            </PopoverTrigger>

            <PopoverContent side="right" className="flex flex-col gap-2">
              <div className="grid">
                <h4 className="font-medium leading-none">Area</h4>
                <p className="text-sm text-muted-foreground">Fill the area details</p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="id">Id</Label>
                  <Input
                    value={dot.id}
                    className="col-span-2 h-8"
                    placeholder="Id da area"
                    onChange={(e) => handleInputChange('id', e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    value={dot.name}
                    className="col-span-2 h-8"
                    placeholder="Nome da area"
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </TooltipTrigger>
        <TooltipContent>{dot.name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
