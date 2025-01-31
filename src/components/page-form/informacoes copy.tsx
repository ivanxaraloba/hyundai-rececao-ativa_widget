'use client';

import { UseFormReturn } from 'react-hook-form';

import FormSection from '@/components/form-section';
import { useGlobalStore } from '@/stores/global';
import { FormData } from './_index';
import RenderField from './render-field';

export default function InformacoesObj({
  form,
}: {
  form: UseFormReturn<FormData>;
}) {
  const { config } = useGlobalStore();
  const configFields = config?.informacoes_viatura2 || [];

  return (
    <FormSection label="Informações Viatura">
      {configFields.map((configField, index: number) => {
        if (configField.id_widget === 'nivel_combustivel') {
          const nivel_images: Record<string, string> = {
            '0': 'https://previewengine-accl.zoho.com/image/WD/7q02g83041e5116104af6a5af6c6490e1e55c',
            '1/4':
              'https://previewengine-accl.zoho.com/image/WD/7q02gcdd12ebf24cd478ea854ad7bd1dcd619',
            '1/2':
              'https://previewengine-accl.zoho.com/image/WD/7q02gbe6d2a051e444b7883a30a208acd228f',
            '3/4':
              'https://previewengine-accl.zoho.com/image/WD/7q02g1a99f819e5f641c5a8cfd73b67fbafcd',
            '1': 'https://previewengine-accl.zoho.com/image/WD/7q02gb767d00d6e834bdc98ce97e733ca53b9',
          };

          const nivelValue = form.watch('nivel_combustivel')?.trim() || '';
          configField._content = {
            beforeInput: () => {
              const imageUrl = nivel_images[nivelValue] || '';
              return (
                imageUrl && (
                  <img
                    src={imageUrl}
                    alt="Nível de Combustível"
                    loading="lazy"
                    className="w-72"
                  />
                )
              );
            },
          };
        }

        return (
          <RenderField
            key={configField.id_widget}
            configField={configField}
            form={form}
          />
        );
      })}
    </FormSection>
  );
}

