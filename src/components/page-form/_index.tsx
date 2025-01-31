import { Config, FieldRow } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useGlobalStore } from '@/stores/global';
import { DAMAGE_MAPS } from '@/utils/constants';
import { damageMapsType, DotProps, dotSchema } from '@/utils/types';
import Estado from './estado';
import Fotografias from './fotografias';
import InformacoesObj from './informacoes copy';
import Orcamento from './orcamento';
import PersonalizacaoObj from './personalizacao copy';

const createFormSchema = (config: Config) => {
  const schemaFields: Record<string, z.ZodType<any, any, any>> = {
    dots: z.record(z.array(dotSchema)),
  };

  [...config.informacoes_viatura2, ...config.personalizacao2].forEach(
    (configField: FieldRow) => {
      let fieldSchema: any;

      if (configField.type === 'number') {
        fieldSchema = z.number();
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

      schemaFields[configField.id_widget] = fieldSchema;
    },
  );

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

  if (!config) return <h1>config is null</h1>;

  const form = useForm<FormData>({
    mode: 'onSubmit',
    resolver: zodResolver(createFormSchema(config)),
    defaultValues: {
      nivel_combustivel: '0',
      numero_or: 999,
      data_proxima_itv: new Date(),
      fim_de_garantia: new Date(),
      dots: DAMAGE_MAPS.reduce(
        (acc: Record<string, DotProps[]>, damageMap: damageMapsType) => {
          acc[damageMap.id] = damageMap.config.dots.map((dot) => dot);
          return acc;
        },
        {},
      ),
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('submitted', data);
  };

  return (
    <div className="max-w-4xl mx-auto p-10">
      <img
        src={config?.image}
        alt="logo_hyundai"
        loading="lazy"
        className="pb-20 mx-auto max-w-xs"
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <InformacoesObj form={form} />
          <Estado form={form} />
          <Orcamento form={form} />
          <PersonalizacaoObj form={form} />
          <Fotografias form={form} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

