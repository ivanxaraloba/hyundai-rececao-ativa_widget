import React, { useState } from 'react';

import { useFormBuild } from '@/hooks/use-form-build';
import { FieldProps } from '@/types/types.form-builder';
import { CirclePlus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import RowField from './row-fields';
import Section from './section';
import { UpdateField } from './update-field';
import { UpdateSection } from './update-section';

export interface RowActionProps {
  component: 'field' | 'section';
  type: 'update' | 'delete';
  item: any;
}

export default function TabFields() {
  const { formBuild, fields, sections } = useFormBuild();
  const [rowAction, setRowAction] = useState<RowActionProps | null>(null);

  return (
    <>
      <div className="space-y-10">
        {formBuild.map((section) => (
          <Section
            section={section}
            setRowAction={setRowAction}
            addField={fields.add}
            removeSection={sections.remove}
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

      {rowAction?.component === 'section' && (
        <UpdateSection
          open={rowAction?.type === 'update'}
          onOpenChange={() => setRowAction(null)}
          section={rowAction?.item}
          onSuccess={sections.edit}
        />
      )}

      {rowAction?.component === 'field' && (
        <UpdateField
          open={rowAction?.type === 'update'}
          onOpenChange={() => setRowAction(null)}
          field={rowAction?.item}
          onSuccess={fields.edit}
        />
      )}
    </>
  );
}

