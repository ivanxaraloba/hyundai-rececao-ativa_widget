import React from 'react';

import { Variants } from '@/types/types.config';
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
import { newSchemaProps } from '../page ( sections with form )';

interface DropdownFieldsProps {
  onSelect: (value: Variants) => void;
  form?: UseFormReturn<newSchemaProps>;
  children: React.ReactNode;
}

export default function DropdownFields({
  onSelect,
  form,
  children,
}: DropdownFieldsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select Component</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {FORMBUILDER_FIELDS_VARIANTS.map((variantValue) => {
          const variantDetails = VARIANT[variantValue];
          return (
            <DropdownMenuItem
              key={variantValue}
              onClick={() => onSelect(variantValue)}
              // disabled={
              //   variantValue === 'maps' &&
              //   !!form
              //     .watch('sections')
              //     .find((s) =>
              //       s.fields.find((rowF) => rowF.find((f) => f.variant == 'maps')),
              //     )
              // }
            >
              {/* {variantDetails.icon && <variantDetails.icon className='!size-3' />} */}
              {variantDetails.type == 'custom' && (
                <Sparkles className="!size-3" />
              )}
              {variantDetails?.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
