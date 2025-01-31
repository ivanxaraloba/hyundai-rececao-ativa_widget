import { z } from 'zod';

import { formSchema } from '@/components/page-form/_index';

export interface FieldRow {
  order: number;
  id_widget: string;
  label: string;
  placeholder: string;
  required: boolean;
  disabled: boolean;
  variant: 'input' | 'date' | 'textarea' | 'select' | 'multi-select' | 'radio';
  type: 'text' | 'number';
  options: string;
  _content?: {
    beforeInput?: any;
    afterInput?: any;
  };
}

export interface Config {
  image: string;
  informacoes_viatura: Record<keyof z.infer<typeof formSchema>, FieldRow>;
  informacoes_viatura2: FieldRow[];
  personalizacao2: FieldRow[];
  personalizacao: FieldRow[];
  fotografias: {
    max_number_of_files: number;
    max_megabytes_per_file: number;
  };
}

