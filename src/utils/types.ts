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

export type configDamageMapsType = Record<
  'ALL' | 'GLASS' | 'TESTE1',
  {
    image: string;
    dots: DotProps[];
  }
>;

export type damageMapsType = {
  id: string;
  label: string;
  config: configDamageMapsType[keyof configDamageMapsType];
};

