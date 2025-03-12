import React, { useState } from 'react';

import { Config, configSchema } from '@/types/types.config';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { H3, Muted } from '@/components/ui/typography';
import { useGlobalStore } from '@/stores/global';
import { CREATOR_FORM_CONFIG } from '@/utils/constants';
import TabDamageMaps from './_components/tab-damage-maps';
import TabForm from './_components/tab-form';
import ButtonLoading from '@/components/ui/button-loading';
import { useMutation } from '@tanstack/react-query';

export default function PageConfig() {
  const { config, recordId } = useGlobalStore();

  const form = useForm<Config>({
    mode: 'onSubmit',
    resolver: zodResolver(configSchema),
    defaultValues: config || {},
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

  return (
    <div className="space-y-10">
      <div>
        <H3>Configurador</H3>
        <Muted>Configure o formulário e os mapas de dano</Muted>
      </div>
      {/* <Tabs defaultValue="form">
        <TabsList className="h-auto w-auto">
          <TabsTrigger className="py-2 px-4" value="form">
            Formulário
          </TabsTrigger>
          <TabsTrigger className="py-2 px-4" value="damage-maps">
            Mapas de dano
          </TabsTrigger>
        </TabsList>
        <div className="mt-10">
          <TabsContent value="form">
            <TabForm />
          </TabsContent>
          <TabsContent value="damage-maps">
            <TabDamageMaps form={form} />
          </TabsContent>
        </div>
      </Tabs> */}

      <TabForm />

      <div className="fixed bottom-6 w-full">
        <div className="flex justify-center w-full">
          <ButtonLoading
            loading={mutationSave.isPending}
            className="w-fit rounded-full p-6"
            onClick={() => mutationSave.mutate()}
          >
            Guardar Configuração
          </ButtonLoading>
        </div>
      </div>
    </div>
  );
}
