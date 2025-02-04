import React from 'react';

import { CollapsibleProps } from '@radix-ui/react-collapsible';
import {
  ChevronDown,
  ChevronUp,
  CirclePlus,
  LucideColumns2,
  LucidePencil,
  LucideTrash2,
  Plus,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FORM_BUILDER } from '@/utils/constants';
import { RowActionProps } from './tab-form-builder';

interface SectionProps {
  section: SectionProps;
  setRowAction: RowActionProps;
}

export default function Section({
  section,
  setRowAction,
  removeSection,
  addField,
  children,
  ...props
}: any & CollapsibleProps) {
  return (
    <Collapsible {...props} className="group border rounded-xl p-4 shadow-sm">
      <div className="flex items-center gap-1 w-full">
        <LucideColumns2 className="cursor-grab w-4 h-4" />
        <div className="w-full text-sm font-medium ml-2">{section.label}</div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            setRowAction({
              component: 'section',
              type: 'update',
              item: section,
            })
          }
        >
          <LucidePencil />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => removeSection(section.id)}
        >
          <LucideTrash2 />
        </Button>
        <CollapsibleTrigger>
          <Button variant="ghost" size="icon">
            <ChevronDown className="group-data-[state=open]:hidden" />
            <ChevronUp className="group-data-[state=closed]:hidden" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <hr className="my-4" />
        <div className="ml-8">
          <div className="space-y-2">{children}</div>
          <div className="mt-4 w-fit mx-auto">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline" className="rounded-full mr-4 text-xs">
                  Add Field{''} +
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Select Component</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {FORM_BUILDER.FIELDS_VARIANTS.map((variant) => (
                  <DropdownMenuItem
                    onClick={() => addField(section.id, variant)}
                  >
                    {variant}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

