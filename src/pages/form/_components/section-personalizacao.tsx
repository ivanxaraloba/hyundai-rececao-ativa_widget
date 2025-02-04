'use client';

import { UseFormReturn } from 'react-hook-form';
import * as z from 'zod';

import FormSection from '@/components/shared/form-section';
import { useGlobalStore } from '@/stores/global';
import { FormData } from '../page';
import RenderField from '../../../components/shared/render-field';

export default function SectionPersonalizacao({
  form,
}: {
  form: UseFormReturn<FormData>;
}) {
  const { config } = useGlobalStore();
  const configFields = config?.fields_sections.personalizacao || [];

  return (
    <FormSection label="Personalização">
      <div className="grid grid-cols-2 gap-4">
        {configFields.map((configField, index: number) => {
          return (
            <RenderField
              key={configField.id_widget}
              configField={configField}
              form={form}
            />
          );
        })}
      </div>
    </FormSection>
  );
}

