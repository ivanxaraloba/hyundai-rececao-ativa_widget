import { useEffect } from 'react';

import { SectionProps, sectionSchema } from '@/types/types.config';
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

interface UpdateSectionProps {
  section: SectionProps | null;
  onSuccess: (updatedSection: SectionProps) => void;
}

export function DialogUpdateSection({
  section,
  onSuccess,
  ...props
}: UpdateSectionProps & DialogProps) {
  const form = useForm<SectionProps>({
    resolver: zodResolver(sectionSchema),
    defaultValues: {
      id: '',
      label: '',
      fields: [],
    },
  });

  const onSubmit = (data: SectionProps) => {
    onSuccess(data);
    props.onOpenChange!(false);
  };

  useEffect(() => {
    if (section) form.reset(section);
  }, [section, form]);

  return (
    <Dialog {...props}>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Edit Section</DialogTitle>
            </DialogHeader>

            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Section Label</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
