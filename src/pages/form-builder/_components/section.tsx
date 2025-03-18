import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { SectionProps } from '@/types/types.config';
import { CollapsibleProps } from '@radix-ui/react-collapsible';
import { Reorder, useDragControls } from 'framer-motion';
import { ChevronDown, ChevronUp, GripVertical, LucidePencil, LucideTrash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { RowActionProps } from '../page';

interface SectionComponentProps {
  section: SectionProps;
  setRowAction: (action: RowActionProps) => void;
  removeSection: (id: SectionProps['id']) => void;
}

export default function Section({
  section,
  setRowAction,
  removeSection,
  children,
  ...props
}: SectionComponentProps & CollapsibleProps) {
  const [draggable, setDraggable] = useState(false);
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      id={section.id}
      value={section}
      dragListener={false}
      dragControls={dragControls}
      onDragStart={() => {
        setDraggable(true);
        document.body.style.userSelect = 'none';
      }}
      onDragEnd={() => {
        setDraggable(false);
        document.body.style.userSelect = '';
      }}
      layout="position"
      data-section-id={section.id}
    >
      <Collapsible
        {...props}
        className={cn('group border rounded-xl shadow-sm bg-background', draggable && 'shadow-lg')}
      >
        <div className="flex items-center gap-1 w-full bg-secondary p-2 group-data-[state=closed]:rounded-xl group-data-[state=open]:rounded-t-xl">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="cursor-grab"
            onPointerDown={(e) => dragControls.start(e)}
          >
            <GripVertical />
          </Button>
          <span className="w-full text-sm font-medium ml-2">{section.label}</span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setRowAction({ type: 'section', action: 'update', item: section })}
          >
            <LucidePencil />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => removeSection(section.id)}
          >
            <LucideTrash2 />
          </Button>
          <CollapsibleTrigger>
            <Button type="button" variant="ghost" size="icon">
              <ChevronDown className="group-data-[state=open]:hidden" />
              <ChevronUp className="group-data-[state=closed]:hidden" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <hr />
          <div className="my-4 space-y-2 px-8">{children}</div>
        </CollapsibleContent>
      </Collapsible>
    </Reorder.Item>
  );
}
