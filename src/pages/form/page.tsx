import { useEffect } from 'react';

import {
  Config,
  Damage,
  DotProps,
  dotSchema,
  FieldRow,
} from '@/types/types.config';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useGlobalStore } from '@/stores/global';
import SectionEstado from './_components/section-estado';
import SectionInformacoes from './_components/section-informacoes';
import SectionOrcamento from './_components/section-orcamento';
import SectionPersonalizacao from './_components/section-personalizacao';
import SectionUploadImages from './_components/section-upload-images';

const createFormSchema = (config: Config) => {
  const schemaFields: Record<string, z.ZodType<any, any, any>> = {
    grouped_dots: z.record(
      z.object({
        label: z.string(),
        dots: z.array(dotSchema),
      }),
    ),
  };

  Object.values(config.fields_sections)
    .flat()
    .forEach((configField: FieldRow) => {
      let fieldSchema: any;

      if (configField.type === 'number') {
        fieldSchema = z.coerce.number();
      } else if (
        configField.variant === 'input' ||
        configField.variant === 'select' ||
        configField.variant === 'textarea'
      ) {
        fieldSchema = z.string();
      } else if (configField.variant === 'date') {
        fieldSchema = z.date();
      } else if (
        configField.variant === 'multi-select' ||
        configField.variant === 'radio'
      ) {
        fieldSchema = z.unknown();
      }

      fieldSchema = fieldSchema.optional();

      if (configField.required) {
        fieldSchema = fieldSchema.refine((val: any) => {
          return !!val;
        }, `Este campo é obrigatório`);
      }

      schemaFields[configField.id] = fieldSchema;
    });

  return z.object(schemaFields) as z.ZodObject<
    Record<string, z.ZodType<any, any, any>>,
    'strip',
    z.ZodTypeAny,
    Record<string, any>,
    Record<string, any>
  >;
};

export type FormData = z.infer<ReturnType<typeof createFormSchema>>;

export default function PageForm() {
  const { config } = useGlobalStore();

  if (!config) return <span>config is null</span>;

  const form = useForm<FormData>({
    mode: 'onSubmit',
    resolver: zodResolver(createFormSchema(config)),
    defaultValues: {
      nivel_combustivel: '0',
      numero_or: 999,
      data_proxima_itv: new Date(),
      fim_de_garantia: new Date(),
      grouped_dots: Array.isArray(config?.estado_viatura)
        ? config.estado_viatura.reduce<Record<string, any>>(
            (acc, damage: Damage) => {
              if (damage?.dots) {
                acc[damage.id] = {
                  label: damage.label,
                  dots: damage.dots,
                };
              }
              return acc;
            },
            {},
          )
        : {},
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('submitted', data);
  };

  useEffect(() => {
    const fetch = async () => {
      const params = ZOHO.CREATOR.UTIL.getQueryParams();
      for (const key of Object.keys(params)) {
        form.setValue(key, params[key], {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    };
    fetch();
  }, [form, ZOHO]);

  return (
    <div className="max-w-4xl mx-auto p-10">
      <img
        src={config?.logo}
        alt="logo_hyundai"
        loading="lazy"
        className="pb-20 mx-auto max-w-xs"
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <SectionInformacoes form={form} />
          <SectionEstado form={form} />
          <SectionOrcamento form={form} />
          <SectionPersonalizacao form={form} />
          <SectionUploadImages form={form} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

