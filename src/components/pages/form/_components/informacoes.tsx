'use client';

import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import * as z from 'zod';

import FormSection from '@/components/shared/form-section';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useGlobalStore } from '@/stores/global';
import { FormData } from '../page';

const Informacoes: React.FC<{
  form: UseFormReturn<FormData>;
}> = ({ form }) => {
  const { config } = useGlobalStore();
  const configFields = config?.informacoes_viatura;

  return (
    <FormSection label="Informações Viatura">
      <FormField
        control={form.control}
        name="numero_or"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{configFields?.numero_or.label}</FormLabel>
            <FormControl>
              <Input
                placeholder={configFields?.numero_or.placeholder}
                disabled
                type="number"
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="matricula"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{configFields?.matricula.label}</FormLabel>
            <FormControl>
              <Input
                placeholder={configFields?.matricula.placeholder}
                type="text"
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="kms"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{configFields?.kms.label}</FormLabel>
            <FormControl>
              <Input
                placeholder={configFields?.kms.placeholder}
                type="text"
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="data_proxima_itv"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>{configFields?.data_proxima_itv.label}</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'pl-3 text-left font-normal',
                      !field.value && 'text-muted-foreground',
                    )}
                  >
                    {field.value ? (
                      format(field.value, 'PPP')
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="fim_de_garantia"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>{configFields?.fim_de_garantia.label}</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'pl-3 text-left font-normal',
                      !field.value && 'text-muted-foreground',
                    )}
                  >
                    {field.value ? (
                      format(field.value, 'PPP')
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="contrato_manutencao"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{configFields?.contrato_manutencao.label}</FormLabel>
            <FormControl>
              <Input
                placeholder={configFields?.contrato_manutencao.placeholder}
                type="text"
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="nivel_combustivel"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{configFields?.nivel_combustivel.label}</FormLabel>
            <FormControl>
              <div className="">
                <img
                  src="https://previewengine-accl.zoho.com/image/WD/7q02g1a99f819e5f641c5a8cfd73b67fbafcd"
                  alt="nivel_combustivel_1"
                  loading="lazy"
                />
                <RadioGroup
                  className="flex gap-4"
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">0</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">1/4</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-three" id="option-three" />
                    <Label htmlFor="option-three">1/2</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-four" id="option-four" />
                    <Label htmlFor="option-four">3/4</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-five" id="option-five" />
                    <Label htmlFor="option-five">1</Label>
                  </div>
                </RadioGroup>
              </div>
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </FormSection>
  );
};

export default Informacoes;

