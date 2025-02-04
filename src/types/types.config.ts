import { z } from 'zod';

export const optionSchema = z.object({
  label: z.string(),
  value: z.any(),
  active: z.boolean().optional(),
  estimate: z.boolean().optional(),
});

export const dotSchema = z.object({
  x: z.number(),
  y: z.number(),
  id: z.number(),
  name: z.string(),
  active: z.boolean(),
  options: z.array(optionSchema),
});

export type OptionProps = z.infer<typeof optionSchema>;
export type DotProps = z.infer<typeof dotSchema>;

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

export interface FieldSection {
  label: string;
  fields: FieldRow[];
}

export interface VehicleStateMap {
  id_map: string;
  image: string;
  dots: string;
}

export interface VehicleState {
  tab_id: string;
  name: string;
  options:
    | string // before formating ( creator )
    | { value: string; label: string; active: boolean; estimate: boolean }; // after formatting ( store/global )
  map: VehicleStateMap;
}

export interface Config {
  logo: string;
  fields_sections: Record<'informacoes_viatura' | 'personalizacao', FieldRow[]>;
  estado_viatura: VehicleState[];
  images_upload: {
    max_number_of_files: number;
    max_megabytes_per_file: number;
  };
}

