import React from 'react';

import { LucidePencil, LucideTrash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FORM_BUILDER } from '@/utils/constants';

export default function RowField({
  section,
  addField,
  removeField,
  setRowAction,
}: any) {
  return (
    <>
      {section.fields.map((rowFields: any, rowIndex: number) => (
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${rowFields.length}, minmax(0, 1fr))`,
          }}
        >
          {rowFields.map((field: any, fieldIndex: number) => (
            <div key={field.id} className="flex items-center gap-4">
              <div className="flex items-center gap-1 border rounded-xl px-3 py-1 w-full">
                <div className="w-full text-xs truncate">{field.label}</div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="min-w-9 min-h-9"
                  onClick={() =>
                    setRowAction({
                      component: 'field',
                      type: 'update',
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
                  onClick={() => removeField(section.id, rowIndex, field.id)}
                >
                  <LucideTrash2 />
                </Button>
              </div>
              {fieldIndex === rowFields.length - 1 && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="min-w-9 w-9 h-9 rounded-full"
                    >
                      +
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Select Component</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {FORM_BUILDER.FIELDS_VARIANTS.map((variant) => (
                      <DropdownMenuItem
                        key={variant}
                        onClick={() => addField(section.id, variant, rowIndex)}
                      >
                        {variant}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

