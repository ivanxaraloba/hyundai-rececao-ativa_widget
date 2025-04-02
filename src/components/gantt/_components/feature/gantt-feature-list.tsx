import { FC, ReactNode } from 'react';

import { cn } from '@/lib/utils';

export type GanttFeatureListProps = {
  className?: string;
  children: ReactNode;
};

export const GanttFeatureList: FC<GanttFeatureListProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'absolute top-0 left-0 h-full w-max space-y-0 divide-y divide-border/50',
        className,
      )}
      style={{
        marginTop: 'var(--gantt-header-height)',
        height: document.getElementById('timeline')?.clientHeight,
        width: document.getElementById('timeline')?.clientWidth,
      }}
    >
      {children}
    </div>
  );
};
