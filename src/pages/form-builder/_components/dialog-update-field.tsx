import { useEffect } from 'react';

import { FieldRowProps, fieldRowSchema, VariantsProps } from '@/types/types.config';
import { zodResolver } from '@hookform/resolvers/zod';
import { DialogProps } from '@radix-ui/react-dialog';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputWithTags } from '@/components/ui/input-with-tags';

interface UpdateFieldProps {
  field: FieldRowProps | null;
  onSuccess: (updatedField: FieldRowProps) => void;
}

export function DialogUpdateField({ field, onSuccess, ...props }: UpdateFieldProps & DialogProps) {
  if (!field) return 'error ( missing field )';

  const form = useForm<FieldRowProps>({
    mode: 'onChange',
    resolver: zodResolver(fieldRowSchema),
    defaultValues: {},
  });

  const onSubmit = (data: FieldRowProps) => {
    onSuccess(data);
    props.onOpenChange!(false);
  };

  useEffect(() => {
    if (field) form.reset(field);
  }, [field, form]);

  return (
    <Dialog {...props}>
      <DialogContent className="max-h-[85vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Edit Field</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field Id</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field Label</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="placeholder"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field Placeholder</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {(['select', 'multi-select', 'radio'] as VariantsProps[]).includes(field.variant) && (
              <FormField
                control={form.control}
                name="options"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Field Options</FormLabel>
                    <FormControl>
                      <InputWithTags
                        limit={30}
                        placeholder="Adicionar nova opção ( max: 30 )"
                        value={field.value ?? []}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field Description</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-8">
              <FormField
                control={form.control}
                name="required"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2">
                    <FormLabel>Required</FormLabel>
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="disabled"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2">
                    <FormLabel>Disabled</FormLabel>
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <DialogClose>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
