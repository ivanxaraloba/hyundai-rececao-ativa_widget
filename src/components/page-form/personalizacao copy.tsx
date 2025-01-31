'use client';

import { UseFormReturn } from 'react-hook-form';
import * as z from 'zod';

import FormSection from '@/components/form-section';
import { useGlobalStore } from '@/stores/global';
import { FormData } from './_index';
import RenderField from './render-field';

export default function PersonalizacaoObj({
  form,
}: {
  form: UseFormReturn<FormData>;
}) {
  const { config } = useGlobalStore();
  const configFields = config?.personalizacao2 || [];

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

