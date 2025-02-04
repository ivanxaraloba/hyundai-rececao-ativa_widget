import { z } from 'zod';

// field
export const fieldSchema = z.object({
  id: z.string(),
  variant: z.string(),
  label: z.string().min(1, 'Label is required'),
  placeholder: z.string().optional(),
  description: z.string().optional(),
  required: z.boolean().optional(),
  disabled: z.boolean().optional(),
});
export type FieldProps = z.infer<typeof fieldSchema>;

// section
export const sectionSchema = z.object({
  id: z.string(),
  label: z.string().min(1, 'Label is required'),
  fields: z.array(z.array(fieldSchema)),
});
export type SectionProps = z.infer<typeof sectionSchema>;

