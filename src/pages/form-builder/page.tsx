'use client';

import React, { useState } from 'react';

import { useFormBuilder } from '@/hooks/use-form-builder';
import { FieldRow, SectionProps } from '@/types/types.config';
import { Reorder, useDragControls } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { H3, Muted } from '@/components/ui/typography';
import { useGlobalStore } from '@/stores/global';
import { DialogUpdateField } from './_components/dialog-update-field';
import { DialogUpdateSection } from './_components/dialog-update-section';
import DropdownFields from './_components/dropdown-fields';
import RowField from './_components/row-fields';
import Section from './_components/section';

export type RowActionProps =
  | {
      type: 'field';
      action: 'update' | 'delete';
      item: FieldRow;
    }
  | {
      type: 'section';
      action: 'update' | 'delete';
      item: SectionProps;
    };

export default function PageFormBuilder() {
  const { config, recordId } = useGlobalStore();
  const [rowAction, setRowAction] = useState<RowActionProps | null>(null);
  const { formBuild, setFormBuild, fields, sections } = useFormBuilder();

  return (
    <div className="space-y-10">
      <div>
        <H3>Configurador</H3>
        <Muted>Configure o formulário e os mapas de dano</Muted>
      </div>

      <div className="space-y-4">
        <Reorder.Group
          axis="y"
          values={formBuild}
          onReorder={(newOrder) => setFormBuild(newOrder)}
          className="space-y-4"
        >
          {formBuild.map((section) => (
            <Section
              key={section.id}
              section={section}
              removeSection={sections.remove}
              setRowAction={setRowAction}
            >
              <Reorder.Group
                axis="y"
                values={section.fields}
                onReorder={(newOrder) => {
                  setFormBuild((prev) =>
                    prev.map((s) =>
                      s.id === section.id ? { ...s, fields: newOrder } : s,
                    ),
                  );
                }}
                className="space-y-4"
              >
                {section.fields.map(
                  (rowFields: FieldRow[], rowIndex: number) => (
                    <RowField
                      key={rowFields[0].id}
                      rowFields={rowFields}
                      removeField={(fieldId) =>
                        fields.remove(section.id, rowIndex, fieldId)
                      }
                      setRowAction={setRowAction}
                    >
                      <DropdownFields
                        onSelect={(variantValue) =>
                          fields.add(section.id, variantValue, rowIndex)
                        }
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="min-w-9 w-9 h-9 rounded-full"
                        >
                          +
                        </Button>
                      </DropdownFields>
                    </RowField>
                  ),
                )}
              </Reorder.Group>
              <div className="w-fit mx-auto">
                <DropdownFields
                  onSelect={(variantValue) =>
                    fields.add(section.id, variantValue)
                  }
                >
                  <Button variant="outline" className="rounded-full text-xs">
                    Add Field +
                  </Button>
                </DropdownFields>
              </div>
            </Section>
          ))}
        </Reorder.Group>

        <div className="w-full flex justify-center">
          <Button
            variant="outline"
            className="rounded-full text-xs"
            onClick={() => sections.add()}
          >
            Add Section +
          </Button>
        </div>
      </div>

      {rowAction?.type === 'section' && (
        <DialogUpdateSection
          open={rowAction?.action === 'update'}
          onOpenChange={() => setRowAction(null)}
          section={rowAction?.item}
          onSuccess={sections.edit}
        />
      )}

      {rowAction?.type === 'field' && (
        <DialogUpdateField
          open={rowAction?.action === 'update'}
          onOpenChange={() => setRowAction(null)}
          field={rowAction?.item}
          onSuccess={fields.edit}
        />
      )}
    </div>
  );
}
