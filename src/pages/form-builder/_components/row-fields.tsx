import React from 'react';

import { FieldRow, SectionProps } from '@/types/types.config';
import { Reorder, useDragControls } from 'framer-motion';
import {
  Calendar,
  GripVertical,
  Hash,
  LucidePencil,
  LucideTrash2,
  Type,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {  VARIANT } from '@/utils/constants';
import { RowActionProps } from '../page';

interface RowFieldProps {
  key: string;
  rowFields: FieldRow[];
  setRowAction: (action: RowActionProps) => void;
  removeField: (fieldId: string) => void;
  children: React.ReactNode;
}

export default function RowField({
  key,
  rowFields,
  removeField,
  setRowAction,
  children,
}: RowFieldProps) {
  const dragControls = useDragControls();
  return (
    <Reorder.Item
      id={key}
      key={key}
      value={rowFields}
      layout="position"
      dragListener={false}
      dragControls={dragControls}
      className="flex items-center gap-2 w-full bg-background"
    >
      <GripVertical
        className="cursor-grab size-4"
        onPointerDown={(e) => dragControls?.start(e)}
      />
      <div
        className="grid gap-4 w-full"
        style={{
          gridTemplateColumns: `repeat(${rowFields.length}, minmax(0, 1fr))`,
        }}
      >
        {rowFields.map((field: FieldRow, fieldIndex: number) => {
          const variantDetails = VARIANT[field.variant];

          return (
            <div key={field.id} className="flex items-center gap-4">
              <div className="flex items-center gap-1 border rounded-xl px-3 py-1 w-full">
                {variantDetails.icon && (
                  <variantDetails.icon className="!size-3" />
                )}
                <div className="text-xs truncate ml-2">{field.label}</div>
                <div className="ml-2 items-center gap-2 md:flex hidden">
                  {field.required && (
                    <Badge
                      variant="destructive"
                      className="text-[8px] uppercase"
                    >
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
