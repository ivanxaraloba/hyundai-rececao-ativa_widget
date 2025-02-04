import { z } from 'zod';

import { FormData } from '@/components/pages/form/page';

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
  informacoes_viatura: Record<keyof FormData, FieldRow>;
  informacoes_viatura2: FieldRow[];
  personalizacao2: FieldRow[];
  personalizacao: FieldRow[];
  fotografias: {
    max_number_of_files: number;
    max_megabytes_per_file: number;
  };
}

