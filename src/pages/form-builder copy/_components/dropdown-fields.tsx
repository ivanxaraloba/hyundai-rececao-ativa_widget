import React from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FORMBUILDER_FIELDS_VARIANTS } from '@/utils/constants';

export default function DropdownFields({
  section,
  addField,
  children,
}: {
  section: any;
  addField: any;
  children: any;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Fields</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {FORMBUILDER_FIELDS_VARIANTS.map((variant, rowIndex) => (
          <DropdownMenuItem
            onClick={() => addField(section.id, variant, rowIndex)}
          >
            {variant}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
