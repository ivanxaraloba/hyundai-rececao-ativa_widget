'use client';

import { FormEvent } from 'react';

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
import Informacoes from './informacoes';
import InformacoesObj from './informacoes copy';
import Orcamento from './orcamento';
import Personalizacao from './personalizacao';
import PersonalizacaoObj from './personalizacao copy';

const createFormSchema = () => {};

export const formSchema = z.object({
  dots: z.record(z.array(dotSchema)),
});
type FormData = z.infer<typeof formSchema>;

export default function PageForm() {
  const { config } = useGlobalStore();

  if (!config) return <h1>config is null</h1>;

  const form = useForm<FormData>({
    mode: 'onSubmit',
    resolver: zodResolver(formSchema(config)),
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

  const onSubmit = (data: any) => {
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-20">
          {/* <Informacoes form={form} /> */}
          <InformacoesObj form={form} />
          {/* <Estado form={form} /> */}
          {/* <Orcamento form={form} /> */}
          <PersonalizacaoObj form={form} />
          {/* <Fotografias form={form} /> */}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

