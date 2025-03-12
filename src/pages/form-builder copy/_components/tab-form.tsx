import React, { useState } from 'react';

import { useFormBuilder } from '@/hooks/use-form-builder';
import { CirclePlus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import RowField from './row-fields';
import Section from './section';
import { DialogUpdateField } from './dialog-update-field';
import { DialogUpdateSection } from './dialog-update-section';
import { FieldRow, SectionProps } from '@/types/types.config';
import DialogUpdateFieldMaps from './dialog-update-field-maps';

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

export default function TabForm() {
  const { formBuild, fields, sections } = useFormBuilder();
  const [rowAction, setRowAction] = useState<RowActionProps | null>(null);

  return (
    <>
      <div className="space-y-4">
        {formBuild.map((section) => (
          <Section
            section={section}
            addField={fields.add}
            removeSection={sections.remove}
            setRowAction={setRowAction}
            addComponent={fields.addComponent}
          >
            <RowField
              section={section}
              addField={fields.add}
              removeField={fields.remove}
              setRowAction={setRowAction}
            />
          </Section>
        ))}
        <Button
          variant="outline"
          className="py-6 w-full"
          onClick={sections.add}
        >
          <span>New Section</span>
          <CirclePlus />
        </Button>
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
        <>
          {rowAction.item?.variant === 'maps' ? (
            <DialogUpdateFieldMaps />
          ) : (
            <DialogUpdateField
              open={rowAction?.action === 'update'}
              onOpenChange={() => setRowAction(null)}
              field={rowAction?.item}
              onSuccess={fields.edit}
            />
          )}
        </>
      )}
    </>
  );
}
