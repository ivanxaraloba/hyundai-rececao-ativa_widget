import { FC, useContext } from 'react';

import { cn } from '@/lib/utils';

import { GanttContext } from '../../_contexts/context';
import { Range } from '../../_utils/dates';
import { GanttHeaderDaily } from './gantt-header-daily';
import { GanttHeaderMonthly } from './gantt-header-monthly';
import { GanttHeaderQuarterly } from './gantt-header-quarterly';

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
