import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { FieldRowProps } from '@/types/types.config';
import { Reorder, useDragControls } from 'framer-motion';
import { GripVertical, LucidePencil, LucideTrash2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { VARIANT } from '@/utils/constants';
import { RowActionProps } from '../page';

interface RowFieldProps {
  rowFields: FieldRowProps[];
  setRowAction: (action: RowActionProps) => void;
  removeField: (fieldId: string) => void;
  children: React.ReactNode;
  value: FieldRowProps[];
  onFieldDrop: (event: any) => void;
}

export default function RowField({
  rowFields,
  removeField,
  setRowAction,
  children,
  value,
  onFieldDrop,
}: RowFieldProps) {
  const [draggable, setDraggable] = useState(false);
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      value={value}
      id={rowFields[0].id}
      onDragStart={() => {
        setDraggable(true);
        document.body.style.userSelect = 'none';
      }}
      onDragEnd={(e) => {
        onFieldDrop(e);
        setDraggable(false);
        document.body.style.userSelect = '';
      }}
      layout="position"
      dragListener={false}
      dragControls={dragControls}
      className={cn(
        'flex items-center gap-2 w-full select-none',
        draggable && 'pointer-events-none cursor-grab',
      )}
      data-field-row
    >
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="min-w-9 w-9 h-9 cursor-grab"
        onPointerDown={(e) => dragControls.start(e)}
      >
        <GripVertical />
      </Button>
      <div
        className="flex flex-col sm:grid gap-2 w-full"
        style={{
          gridTemplateColumns: `repeat(${rowFields.length}, minmax(0, 1fr))`,
        }}
      >
        {rowFields.map((field) => {
          const variantDetails = VARIANT[field.variant];

          return (
            <div key={field.id} className="flex items-center gap-4">
              <div className="flex items-center gap-1 border rounded-xl px-3 py-1 w-full bg-background">
                {variantDetails.icon && <variantDetails.icon className="!size-3" />}
                <div className="text-xs truncate ml-2">{field.label}</div>
                <div className="ml-2 items-center gap-2 md:flex hidden">
                  {field.required && (
                    <Badge variant="destructive" className="text-[8px] uppercase">
                      required
                    </Badge>
                  )}
                  {field.disabled && (
                    <Badge variant="outline" className="text-[8px] uppercase">
                      disabled
                    </Badge>
                  )}
                </div>
                <div className="ml-auto">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="min-w-9 min-h-9"
                    onClick={() =>
                      setRowAction({
                        type: 'field',
                        action: 'update',
                        item: field,
                      })
                    }
                  >
                    <LucidePencil />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="min-w-9 min-h-9"
                    onClick={() => removeField(field.id)}
                  >
                    <LucideTrash2 />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {children}
    </Reorder.Item>
  );
}
