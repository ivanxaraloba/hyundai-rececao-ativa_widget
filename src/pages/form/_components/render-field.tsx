import React from 'react';

import { cn } from '@/lib/utils';
import DotToggle from '@/pages/form/_components/dot-toggle';
import { DotProps, FieldRowProps, OptionProps } from '@/types/types.config';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, X } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from '@/components/ui/multi-select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import FieldVariantMaps from './field-variant-maps';

export default function RenderField({
  field: configField,
  form,
}: {
  field: FieldRowProps;
  form: UseFormReturn<any>;
}) {
  return (
    configField.variant && (
      <>
        <FormField
          control={form.control}
          name={configField.id}
          render={({ field }) => (
            <FormItem>
              {configField.variant !== 'maps' && <FormLabel>{configField.label}</FormLabel>}
              <FormControl>
                <div>
                  {configField?._content?.beforeInput && configField?._content?.beforeInput()}

                  {/* renders */}

                  {configField.variant == 'number' && (
                    <Input
                      type="number"
                      disabled={configField.disabled}
                      placeholder={configField.label}
                      {...field}
                    />
                  )}

                  {configField.variant == 'input' && (
                    <Input
                      type="text"
                      disabled={configField.disabled}
                      placeholder={configField.label}
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
                        {configField?.options?.map((option, index) => (
                          <SelectItem key={index} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}

                  {configField.variant == 'multi-select' && (
                    <MultiSelector values={field.value || []} onValuesChange={field.onChange} loop>
                      <MultiSelectorTrigger>
                        <MultiSelectorInput
                          disabled={configField.disabled}
                          placeholder="-- Selecionar --"
                        />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                        <MultiSelectorList>
                          {configField?.options?.map((option, index) => (
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
                      {configField?.options?.map((option, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={option} />
                          <Label htmlFor={option}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}

                  {configField.variant == 'maps' && (
                    <FieldVariantMaps configField={configField} field={field} />
                  )}

                  {/* end renders */}

                  {configField?._content?.afterInput && configField?._content?.afterInput()}
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
