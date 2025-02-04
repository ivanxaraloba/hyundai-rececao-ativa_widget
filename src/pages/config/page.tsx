import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import ButtonLoading from '@/components/ui/button-loading';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGlobalStore } from '@/stores/global';
import { STORAGE_CONFIG } from '@/utils/constants';

export const configDetailsSchema = z.object({
  appName: z.string().min(3),
  reportName: z.string().min(3),
});

export type FormProps = z.infer<typeof configDetailsSchema>;

export default function PageConfig() {
  const { getConfig } = useGlobalStore();

  const form = useForm<FormProps>({
    resolver: zodResolver(configDetailsSchema),
    defaultValues: {
      appName: localStorage?.getItem(STORAGE_CONFIG.appName) || '',
      reportName: localStorage?.getItem(STORAGE_CONFIG.reportName) || '',
    },
  });

  const mutationGetConfig = useMutation({
    mutationFn: async (data: FormProps) => {
      await getConfig(data);
      return data;
    },
    onSuccess: (data: FormProps) => {
      localStorage.setItem(STORAGE_CONFIG.appName, data.appName);
      localStorage.setItem(STORAGE_CONFIG.reportName, data.reportName);
      toast.success('Config fetched successfully!');
    },
  });

  const onSubmit = (data: FormProps) => {
    mutationGetConfig.mutate(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-sm"
      >
        <FormField
          control={form.control}
          name="appName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>appName</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reportName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>reportName</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonLoading loading={mutationGetConfig.isPending}>
          Submit
        </ButtonLoading>
      </form>
    </Form>
  );
}

