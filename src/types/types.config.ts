import { z } from 'zod';

import { FORMBUILDER_FIELDS_VARIANTS } from '@/utils/constants';

export const optionSchema = z.object({
  label: z.string(),
  value: z.any(),
  active: z.boolean().optional(),
  estimate: z.boolean().optional(),
});

export const dotSchema = z.object({
  id: z.number(),
  x: z.number(),
  y: z.number(),
  name: z.string(),
  active: z.boolean(),
  options: z.array(optionSchema),
});

export const damageSchema = z.object({
  id: z.string(),
  label: z.string(),
  options: z.array(z.string()),
  image: z.string(),
  dots: z.array(dotSchema),
});

export const fieldRowSchema = z
  .object({
    id: z.string().min(1, 'Id is required'),
    label: z.string().min(1, 'Label is required'),
    placeholder: z.string().optional(),
    description: z.string().optional(),
    required: z.boolean().optional(),
    disabled: z.boolean().optional(),
    variant: z.enum(FORMBUILDER_FIELDS_VARIANTS),
    options: z.array(z.string()).optional(), // only used when variant: select or multi-select or radio
    maps: z.array(damageSchema).optional(), // only used when variant: maps
    _content: z
      .object({
        beforeInput: z.any().optional(),
        afterInput: z.any().optional(),
      })
      .optional(),
  })
  .refine(
    (data) =>
      !['select', 'multi-select', 'radio'].includes(data.variant) ||
      (data.options && data.options.length > 0),
    {
      message: 'Options are required',
      path: ['options'],
    },
  )
  .refine((data) => data.variant !== 'maps' || (data.maps && data.maps.length > 0), {
    message: 'Maps is required',
    path: ['maps'],
  });

export const fieldSectionSchema = z.object({
  label: z.string(),
  fields: z.array(fieldRowSchema),
});

export const configSchema = z.object({
  logo: z.string(),
  fields_sections: z.record(
    z.enum(['vehicle_info', 'customization']),
    z.array(fieldRowSchema),
  ),
  damage_maps: z.array(damageSchema),
  images_upload: z.object({
    max_files_count: z.number(),
    max_file_size_mb: z.number(),
  }),
});

export const sectionSchema = z.object({
  id: z.string(),
  label: z.string().min(1, 'Label is required'),
  fields: z.array(z.array(fieldRowSchema)),
});

export type OptionProps = z.infer<typeof optionSchema>;
export type DotProps = z.infer<typeof dotSchema>;
export type Damage = z.infer<typeof damageSchema>;
export type Config = z.infer<typeof configSchema>;
export type SectionProps = z.infer<typeof sectionSchema>;
export type FieldRow = z.infer<typeof fieldRowSchema>;

export type Variants = (typeof FORMBUILDER_FIELDS_VARIANTS)[number];
