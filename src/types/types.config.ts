import { z } from 'zod';

import { FORMBUILDER_FIELDS_VARIANTS } from '@/utils/constants';

export const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
  estimate: z.boolean().optional(),
});

export const dotSchema = z.object({
  id: z.string().or(z.number()),
  label: z.string(),
  x: z.coerce.number(),
  y: z.coerce.number(),
});

export const mapSchema = z.object({
  id: z.string().min(1, 'Id is required'),
  label: z.string().min(1, 'Label is required'),
  options_label: z.string().min(1, 'Options label is required'),
  options_description: z.string().min(1, 'Options label is required'),
  options: z
    .array(optionSchema)
    .default([])
    .refine((options) => options.length === 0 || options.every((opt) => opt.label && opt.value), {
      message: 'All options must have both label and value',
    }),
  image: z.string().min(1, 'Image is required'),
  dots: z.array(dotSchema).min(1, 'At least one dot is required'),
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
    maps: z.array(mapSchema).optional(), // only used when variant: maps
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

export const sectionSchema = z.object({
  id: z.string(),
  label: z.string().min(1, 'Label is required'),
  fields: z.array(z.array(fieldRowSchema)),
});

export const configSchema = z.object({
  logo: z.string(),
  sections: z.array(sectionSchema),
});

export type OptionProps = z.infer<typeof optionSchema>;
export type DotProps = z.infer<typeof dotSchema>;
export type MapProps = z.infer<typeof mapSchema>;
export type ConfigProps = z.infer<typeof configSchema>;
export type SectionProps = z.infer<typeof sectionSchema>;
export type FieldRowProps = z.infer<typeof fieldRowSchema>;

export type VariantsProps = (typeof FORMBUILDER_FIELDS_VARIANTS)[number];
