'use client';

import React from 'react';

import { UseFormReturn } from 'react-hook-form';
import * as z from 'zod';

import { FileUploader } from '@/components/shared/file-uploader';
import FormSection from '@/components/shared/form-section';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useGlobalStore } from '@/stores/global';
import { FormData } from '../page';

export default function SectionUploadImages({
  form,
}: {
  form: UseFormReturn<FormData>;
}) {
  const { config } = useGlobalStore();

  return (
    <FormSection label="Submissão de Fotografias">
      <FormField
        control={form.control}
        name="imagens"
        render={({ field }) => (
          <div className="space-y-6">
            <FormItem className="w-full">
              <FormLabel>Imagens</FormLabel>
              <FormControl>
                <FileUploader
                  value={field.value}
                  onValueChange={field.onChange}
                  maxFileCount={
                    config?.images_upload?.max_files_count || 10
                  }
                  maxSize={
                    (config?.images_upload?.max_file_size_mb || 4) *
                    1024 *
                    1024
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </div>
        )}
      />
    </FormSection>
  );
}

