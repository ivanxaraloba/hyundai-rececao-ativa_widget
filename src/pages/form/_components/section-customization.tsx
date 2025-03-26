'use client';

import { UseFormReturn } from 'react-hook-form';
import * as z from 'zod';

import FormSection from '@/components/shared/form-section';
import { useGlobalStore } from '@/stores/global';
import { FormData } from '../page';
import RenderField from './render-field';

export default function SectionCustomization({
  form,
}: {
  form: UseFormReturn<FormData>;
}) {
  const { config } = useGlobalStore();
  const configFields = config?.fields_sections.customization || [];

  return (
    <FormSection label="Personalização">
      <div className="grid grid-cols-2 gap-4">
        {configFields.map((configField, index: number) => {
          return (
            <RenderField
              key={configField.id}
              field={configField}
              form={form}
            />
          );
        })}
      </div>
    </FormSection>
  );
}
