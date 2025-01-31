import { z } from 'zod';

export interface InformacaoViatura {
  order: number;
  id_widget: string;
  label: string;
  placeholder: string;
  required: boolean;
  disabled: boolean;
}

interface Personalizacao {
  order: number | null;
  id_widget: string;
  label: string;
  placeholder: string | null;
  required: boolean;
  disabled: boolean;
  options: any[];
}

interface Fotografias {
  max_number_of_files: number;
  max_megabytes_per_file: number;
}

export interface ConfigDetails {
  image: string;
  informacoes_viatura: Record<
    keyof z.infer<typeof formSchema>,
    InformacaoViatura
  >;
  personalizacao: Personalizacao[];
  fotografias: Fotografias;
}

