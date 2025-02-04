import React from 'react';

import { cn } from '@/lib/utils';
import { FieldRow } from '@/types/types.config';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

import { Calendar } from '@/components/ui/calendar';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from '@/components/ui/multi-select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Textarea } from '../ui/textarea';

export default function RenderField({
  configField,
  form,
}: {
  configField: FieldRow;
  form: UseFormReturn<any>;
}) {
  const fieldOptions =
    (configField?.options || '')?.split(';')?.filter(Boolean) || [];

  return (
    configField.variant && (
      <>
        <FormField
          control={form.control}
          name={configField.id_widget}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{configField.label}</FormLabel>
              <FormControl>
                <div>
                  {configField?._content?.beforeInput &&
                    configField?._content?.beforeInput()}

                  {/* renders */}

                  {configField.variant == 'input' && (
                    <Input
                      disabled={configField.disabled}
                      placeholder={configField.label}
                      type={configField.type || 'text'}
                      {...field}
                    />
                  )}

                  {configField.variant == 'date' && (
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            disabled={configField.disabled}
                            variant={'outline'}
                            className={cn(
                              'pl-3 text-left font-normal w-full',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Escolha uma data</span>
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
                  )}

                  {configField.variant == 'textarea' && (
                    <Textarea
                      disabled={configField.disabled}
                      placeholder={configField.placeholder}
                      className="resize-none"
                      {...field}
                    />
                  )}

                  {configField.variant == 'select' && (
                    <Select
                      disabled={configField.disabled}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="-- Selecionar --" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {fieldOptions.map((option, index) => (
                          <SelectItem key={index} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}

                  {configField.variant == 'multi-select' && (
                    <MultiSelector
                      values={field.value || []}
                      onValuesChange={field.onChange}
                      loop
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput
                          disabled={configField.disabled}
                          placeholder="-- Selecionar --"
                        />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                        <MultiSelectorList>
                          {fieldOptions.map((option, index) => (
                            <MultiSelectorItem key={index} value={option}>
                              {option}
                            </MultiSelectorItem>
                          ))}
                        </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  )}

                  {configField.variant == 'radio' && (
                    <RadioGroup
                      disabled={configField.disabled}
                      className="flex gap-4"
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      {fieldOptions.map((option, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <RadioGroupItem value={option} id={option} />
                          <Label htmlFor={option}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}

                  {/* end renders */}

                  {configField?._content?.afterInput &&
                    configField?._content?.afterInput()}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </>
    )
  );
}

