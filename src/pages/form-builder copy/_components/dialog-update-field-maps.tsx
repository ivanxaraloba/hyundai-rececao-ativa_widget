import { useEffect } from 'react';

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
import { FieldRow, fieldRowSchema } from '@/types/types.config';
import TabDamageMaps from './tab-damage-maps';

export default function DialogUpdateFieldMaps({ form }: any) {
  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Field</DialogTitle>
        </DialogHeader>
        <TabDamageMaps form={form} />
      </DialogContent>
    </Dialog>
  );
}
