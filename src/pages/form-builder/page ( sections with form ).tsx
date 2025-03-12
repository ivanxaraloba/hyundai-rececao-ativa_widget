import React, { useState } from 'react';

import { useFormBuilder } from '@/hooks/use-form-builder';
import {
  Config,
  configSchema,
  damageSchema,
  FieldRow,
  SectionProps,
  sectionSchema,
  Variants,
} from '@/types/types.config';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { CirclePlus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import ButtonLoading from '@/components/ui/button-loading';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { H3, Muted } from '@/components/ui/typography';
import { useGlobalStore } from '@/stores/global';
import { CREATOR_FORM_CONFIG, FORMBUILDER_FIELDS_VARIANTS, VARIANT } from '@/utils/constants';
import { DialogUpdateField } from './_components/dialog-update-field';
import DialogUpdateFieldMaps from './_components/dialog-update-field-maps';
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

export const newSchema = z.object({
  logo: z.string(),
  maps: z.array(damageSchema),
  sections: z.array(sectionSchema),
});
export type newSchemaProps = z.infer<typeof newSchema>;

export default function PageConfig() {
  const { config, recordId } = useGlobalStore();
  const [rowAction, setRowAction] = useState<RowActionProps | null>(null);

  const form = useForm<newSchemaProps>({
    mode: 'onSubmit',
    resolver: zodResolver(newSchema),
    defaultValues: {
      logo: '',
      sections: [],
    },
  });

  const mutationSave = useMutation({
    mutationFn: async () => {
      if (!recordId) return;

      const response = await ZOHO.CREATOR.API.updateRecord({
        appName: CREATOR_FORM_CONFIG.appName,
        reportName: CREATOR_FORM_CONFIG.reportName,
        id: recordId,
        data: {
          data: {
            image: '',
            config_1: form.getValues(),
          },
        },
      });

      if (response?.code !== 3000) throw new Error(response?.message);
    },
    onSuccess: async () => {
      toast.success('Configuração guardada com sucesso');
    },
    onError: (err) => {
      toast.error('Erro ao guardar a configuração');
      console.log({ err });
    },
  });

  const addSection = () => {
    const currentSections = form.getValues('sections');
    const newSection = {
      id: `section_${Date.now()}`,
      label: 'New Section',
      fields: [],
    };

    const updatedSections = [...currentSections, newSection];

    form.setValue('sections', updatedSections, { shouldValidate: true });
  };

  const editSection = (updatedSection: SectionProps) => {
    const currentSections = form.getValues('sections');

    const updatedSections = currentSections.map((section) =>
      section.id === updatedSection.id
        ? {
            ...section,
            label: updatedSection.label,
            fields: updatedSection.fields,
          }
        : section,
    );

    form.setValue('sections', updatedSections, { shouldValidate: true });
  };

  const removeSection = (sectionId: string) => {
    const currentSections = form.getValues('sections');

    const updatedSections = currentSections.filter((section) => section.id !== sectionId);

    form.setValue('sections', updatedSections, { shouldValidate: true });
  };

  const addField = (sectionId: string, variantValue: Variants, rowIndex?: number) => {
    const currentSections = form.getValues('sections');
    const updatedSections = currentSections.map((section) => {
      if (section.id !== sectionId) return section;

      const newField: FieldRow = {
        id: `field_${variantValue}_${Date.now()}`,
        variant: variantValue,
        label: VARIANT[variantValue].label,
        required: false,
        disabled: false,
      };

      console.log(sectionId);
      console.log(variantValue);
      console.log(rowIndex);

      const updatedFields = [...section.fields];

      if (rowIndex === undefined || rowIndex >= updatedFields.length) {
        updatedFields.push([newField]);
      } else {
        updatedFields[rowIndex] = [...updatedFields[rowIndex], newField];
      }

      return { ...section, fields: updatedFields };
    });

    form.setValue('sections', updatedSections, { shouldValidate: true });
  };

  const editField = (updatedField: FieldRow) => {
    const currentSections = form.getValues('sections');

    const updatedSections = currentSections.map((section) => ({
      ...section,
      fields: section.fields.map((row) =>
        row.map((field) => (field.id === updatedField.id ? { ...field, ...updatedField } : field)),
      ),
    }));

    form.setValue('sections', updatedSections, { shouldValidate: true });
  };

  const removeField = (sectionId: string, rowIndex: number, fieldId: string) => {
    const currentSections = form.getValues('sections');

    const updatedSections = currentSections.map((section) => {
      if (section.id !== sectionId) return section;

      const updatedFields = section.fields
        .map((row, idx) => (idx === rowIndex ? row.filter((field) => field.id !== fieldId) : row))
        .filter((row) => row.length > 0);

      return { ...section, fields: updatedFields };
    });

    form.setValue('sections', updatedSections, { shouldValidate: true });
  };

  return (
    <div className="space-y-10">
      <div>
        <H3>Configurador</H3>
        <Muted>Configure o formulário e os mapas de dano</Muted>
      </div>

      <div className="space-y-4">
        {form.watch('sections').map((section) => (
          <Section section={section} removeSection={removeSection} setRowAction={setRowAction}>
            {section.fields.map((rowFields: FieldRow[], rowIndex: number) => (
              <RowField
                fields={rowFields}
                rowIndex={rowIndex}
                section={section}
                removeField={removeField}
                setRowAction={setRowAction}
              >
                <DropdownFields onSelect={(variantValue) => addField(section.id, variantValue, rowIndex)} form={form}>
                  <Button variant="outline" size="icon" className="min-w-9 w-9 h-9 rounded-full">
                    +
                  </Button>
                </DropdownFields>
              </RowField>
            ))}
            <div className="w-fit mx-auto">
              <DropdownFields onSelect={(variantValue) => addField(section.id, variantValue)} form={form}>
                <Button variant="outline" className="rounded-full text-xs">
                  Add Field +
                </Button>
              </DropdownFields>
            </div>
          </Section>
        ))}

        <div className="w-full flex justify-center">
          <Button variant="outline" className="rounded-full text-xs" onClick={addSection}>
            Add Section +
          </Button>
        </div>
      </div>

      {rowAction?.type === 'section' && (
        <DialogUpdateSection
          open={rowAction?.action === 'update'}
          onOpenChange={() => setRowAction(null)}
          section={rowAction?.item}
          onSuccess={editSection}
        />
      )}

      {rowAction?.type === 'field' && (
        <>
          {rowAction.item?.variant === 'maps' ? (
            <DialogUpdateFieldMaps
              open={rowAction?.action === 'update'}
              onOpenChange={() => setRowAction(null)}
              form={form}
            />
          ) : (
            <DialogUpdateField
              open={rowAction?.action === 'update'}
              onOpenChange={() => setRowAction(null)}
              field={rowAction?.item}
              onSuccess={editField}
            />
          )}
        </>
      )}

      <div className="sticky bottom-4 flex justify-center">
        <ButtonLoading
          loading={mutationSave.isPending}
          className="w-fit rounded-full p-6"
          onClick={() => mutationSave.mutate()}
        >
          Guardar Configuração
        </ButtonLoading>
      </div>
    </div>
  );
}
