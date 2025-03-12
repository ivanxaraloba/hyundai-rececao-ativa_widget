import React from 'react';

import { SectionProps } from '@/types/types.config';
import { CollapsibleProps } from '@radix-ui/react-collapsible';
import { DragControls, Reorder, useDragControls } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  GripVertical,
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
import { FORMBUILDER_FIELDS_VARIANTS, VARIANT } from '@/utils/constants';
import { RowActionProps } from '../page';
import DropdownFields from './dropdown-fields';

interface SectionComponentProps {
  section: SectionProps;
  setRowAction: (action: RowActionProps) => void;
  removeSection: any;
}

export default function Section({
  section,
  setRowAction,
  removeSection,
  children,
  ...props
}: SectionComponentProps & CollapsibleProps) {
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      id={section.id}
      key={section.id}
      value={section}
      dragListener={false}
      dragControls={dragControls}
      layout="position"
    >
      <Collapsible
        {...props}
        className="group border rounded-xl py-2 px-4 shadow-sm bg-background"
      >
        <div className="flex items-center gap-1 w-full">
          <GripVertical
            className="cursor-grab size-4"
            onPointerDown={(e) => dragControls?.start(e)}
          />
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
          <hr className="mt-2" />
          <div className="mt-6 mb-4 space-y-2 px-8">{children}</div>
        </CollapsibleContent>
      </Collapsible>
    </Reorder.Item>
  );
}
