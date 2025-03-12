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
import { FORMBUILDER_FIELDS_VARIANTS } from '@/utils/constants';
import { RowActionProps } from './tab-form';

interface SectionProps {
  section: SectionProps;
  setRowAction: (action: RowActionProps) => void;
}

export default function Section({
  section,
  setRowAction,
  removeSection,
  addField,
  addComponent,
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
              type: 'section',
              action: 'update',
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
                  Add Element{''} +
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Fields</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {FORMBUILDER_FIELDS_VARIANTS.map((item) => (
                  <DropdownMenuItem onClick={() => addField(section.id, item)}>
                    {item}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Components</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {[
                  {
                    label: 'Maps',
                    value: 'maps',
                  },
                ].map((item) => (
                  <DropdownMenuItem
                    onClick={() => addComponent(section.id, item.value)}
                  >
                    {item.label}
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
