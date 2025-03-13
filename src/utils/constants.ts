import { VariantsProps } from '@/types/types.config';
import {
  Calendar,
  List,
  ListChecks,
  LucideProps,
  Radio,
  Sparkles,
  Text,
} from 'lucide-react';

export const CREATOR_FORM_CONFIG = {
  appName: 'rececao-ativa',
  reportName: 'Widget_Config_Report',
};

export const FORMBUILDER_STORAGE = {
  appName: 'rececaoativa:app:name',
  reportName: 'rececaoativa:app:report',
};

export const FORMBUILDER_FIELDS_VARIANTS = [
  'input',
  'date',
  'textarea',
  'select',
  'multi-select',
  'radio',
  'maps',
] as const;

export const VARIANT: Record<
  VariantsProps,
  {
    label: string;
    type: 'default' | 'custom';
    icon?: React.ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
    >;
  }
> = {
  input: { label: 'Input', type: 'default', icon: Text },
  date: { label: 'Date', type: 'default', icon: Calendar },
  textarea: {
    label: 'Textarea',
    type: 'default',
    icon: Text,
  },
  select: { label: 'Select', type: 'default', icon: List },
  'multi-select': {
    label: 'Multi-Select',
    type: 'default',
    icon: ListChecks,
  },
  radio: { label: 'Radio', type: 'default', icon: Radio },
  maps: { label: 'Mapa de pontos', type: 'custom', icon: Sparkles },
} as const;
