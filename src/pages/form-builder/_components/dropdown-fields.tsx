import React from 'react';

import { VariantsProps } from '@/types/types.config';
import { Sparkles } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FORMBUILDER_FIELDS_VARIANTS, VARIANT } from '@/utils/constants';

interface DropdownFieldsProps {
  onSelect: (value: VariantsProps) => void;
  children: React.ReactNode;
}

export default function DropdownFields({ onSelect, children }: DropdownFieldsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select Component</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {FORMBUILDER_FIELDS_VARIANTS.map((variantValue) => {
          const variantDetails = VARIANT[variantValue];
          return (
            // <DropdownMenuItem>
            //   <div
            //     className="flex size-8 items-center justify-center rounded-lg border border-border bg-background"
            //     aria-hidden="true"
            //   >
            //     {variantDetails.icon && <variantDetails.icon className="!size-3" />}
            //   </div>
            //   <div>
            //     <div className="text-sm font-medium">{variantDetails?.label}</div>
            //     <div className="text-xs text-muted-foreground">Start writing with plain text</div>
            //   </div>
            // </DropdownMenuItem>
            <DropdownMenuItem key={variantValue} onClick={() => onSelect(variantValue)}>
              {/* {variantDetails.icon && <variantDetails.icon className='!size-3' />} */}
              {variantDetails.type == 'custom' && <Sparkles className="!size-3" />}
              {variantDetails?.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
