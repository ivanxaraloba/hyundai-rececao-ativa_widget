import { FC, useContext } from 'react';

import { cn } from '@/lib/utils';

import { GanttHeaderDaily } from '@/components/gantt/header/gantt-header-daily';
import { GanttHeaderMonthly } from '@/components/gantt/header/gantt-header-monthly';
import { GanttHeaderQuarterly } from '@/components/gantt/header/gantt-header-quarterly';
import { GanttContext } from '@/components/gantt/context';
import { Range } from '../utils-dates';

const headers: Record<Range, FC> = {
  daily: GanttHeaderDaily,
  monthly: GanttHeaderMonthly,
  quarterly: GanttHeaderQuarterly,
};

export type GanttHeaderProps = {
  className?: string;
};

export const GanttHeader: FC<GanttHeaderProps> = ({ className }) => {
  const gantt = useContext(GanttContext);
  const Header = headers[gantt.range];

  return (
    <div className={cn('-space-x-px flex h-full w-max divide-x divide-border/50', className)}>
      <Header />
    </div>
  );
};
