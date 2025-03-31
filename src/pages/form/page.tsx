import { useEffect } from 'react';

import { ConfigProps, configSchema, FieldRowProps } from '@/types/types.config';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Wrench } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import BrandLogo from '@/components/shared/brand-logo';
import FormSection from '@/pages/form/_components/form-section';
import { Button } from '@/components/ui/button';
import ButtonLoading from '@/components/ui/button-loading';
import { Form } from '@/components/ui/form';
import { useGlobalStore } from '@/stores/global';
import { useRouterStore } from '@/stores/router';
import RenderField from './_components/render-field';

const createFormSchema = (config: ConfigProps) => {
  const schemaFields: Record<string, z.ZodType<any, any, any>> = {};

  config.sections.forEach((section) => {
    section.fields.flat().forEach((field: FieldRowProps) => {
      let fieldSchema: any;

      if (field.variant === 'number') {
        fieldSchema = z.coerce.number();
      } else if (field.variant === 'date') {
        fieldSchema = z.date();
      } else if (
        field.variant === 'multi-select' ||
        field.variant === 'radio' ||
        field.variant === 'maps'
      ) {
        fieldSchema = z.any();
      } else {
        fieldSchema = z.string();
      }

      fieldSchema = fieldSchema.optional();

      if (field.required) {
        fieldSchema = fieldSchema.refine((val: any) => {
          return !!val;
        }, 'Este campo é obrigatório');
      }

      schemaFields[field.id] = fieldSchema;
    });
  });

  return z.object(schemaFields);
};

export type FormData = z.infer<ReturnType<typeof createFormSchema>>;

export default function PageForm() {
  const { config } = useGlobalStore();
  const router = useRouterStore();

  if (!config) return <span>config is null</span>;

  const form = useForm<FormData>({
    mode: 'onSubmit',
    resolver: zodResolver(createFormSchema(config)),
    defaultValues: {},
  });

  const mutationSubmit = useMutation({
    mutationFn: async (data: FormData) => {
      console.log('submit', data);
      //sleep
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
    onSuccess: async () => {
      toast.success('Formulario enviado com sucesso');
    },
    onError: (err) => {
      toast.error('Erro ao enviar o formulário');
      console.log({ err });
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    mutationSubmit.mutate(data);
  };

  useEffect(() => {
    const fetch = async () => {
      const params = await ZOHO.CREATOR.UTIL.getQueryParams();
      for (const key of Object.keys(params)) {
        form.setValue(key, params[key], {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    };
    fetch();
  }, [ZOHO]);

  console.log(form.getValues());

  return (
    <>
      <Button
        type="button"
        size="icon"
        variant="secondary"
        className="fixed top-4 right-4 sm:top-10 sm:right-10"
        onClick={() => router.push('form-builder')}
      >
        <Wrench />
      </Button>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <BrandLogo src={config?.logo} />
          {config.sections.map((section) => (
            <FormSection key={section.id} label={section.label}>
              {section.fields.map((rowFields, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex flex-col sm:grid gap-4 w-full"
                  style={{
                    gridTemplateColumns: `repeat(${rowFields.length}, minmax(0, 1fr))`,
                  }}
                >
                  {rowFields.map((field, index) => (
                    <RenderField key={index} field={field} form={form} />
                  ))}
                </div>
              ))}
            </FormSection>
          ))}
          <div className="flex justify-center w-full">
            <ButtonLoading
              type="submit"
              className="w-full max-w-40 rounded-full py-6"
              loading={mutationSubmit.isPending}
            >
              Enviar
            </ButtonLoading>
          </div>
        </form>
      </Form>
    </>
  );
}
