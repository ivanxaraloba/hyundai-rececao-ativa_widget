'use client';

import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { GanttFeature } from '../../components/gantt/gantt';
import { getColorFromId } from './gantt-utils';

export type GanttSidebarItemProps = {
  feature: GanttFeature;
  onSelectItem?: (id: string) => void;
  className?: string;
};

export const GanttSidebarItem: FC<GanttSidebarItemProps> = ({
  feature,
  className,
}) => (
  <div
    role="button"
    tabIndex={0}
    key={feature.id}
    className={cn('relative flex items-center gap-2.5 p-2.5 text-xs', className)}
    style={{
      height: 'var(--gantt-row-height)',
    }}
  >
    <div
      className="pointer-events-none h-2 w-2 shrink-0 rounded-full"
      style={{
        backgroundColor: getColorFromId(feature.id),
      }}
    />
    <p className="pointer-events-none flex-1 truncate text-left font-medium">{feature.name}</p>
  </div>
);

export const GanttSidebarHeader: FC = () => (
  <div
    className="sticky top-0 z-10 flex shrink-0 items-end justify-between gap-2.5 border-border/50 border-b bg-backdrop/90 p-2.5 font-medium text-muted-foreground text-xs backdrop-blur-sm"
    style={{ height: 'var(--gantt-header-height)' }}
  >
    <p className="flex-1 truncate text-left">Properties</p>
    <p className="shrink-0">Duration</p>
  </div>
);

export type GanttSidebarGroupProps = {
  children: ReactNode;
  name: string;
  className?: string;
};

export const GanttSidebarGroup: FC<GanttSidebarGroupProps> = ({ children, name, className }) => (
  <div className={className}>
    <p
      style={{ height: 'var(--gantt-row-height)' }}
      className="w-full truncate p-2.5 text-left font-medium text-muted-foreground text-xs"
    >
      {name}
    </p>
    <div className="divide-y divide-border/50">{children}</div>
  </div>
);

export type GanttSidebarProps = {
  children: ReactNode;
  className?: string;
};

export const GanttSidebar: FC<GanttSidebarProps> = ({ children, className }) => (
  <div
    data-roadmap-ui="gantt-sidebar"
    className={cn(
      'sticky left-0 z-30 h-max min-h-full overflow-clip border-border/50 border-r bg-background/90 backdrop-blur-md',
      className,
    )}
  >
    <GanttSidebarHeader />
    <div className="space-y-4">{children}</div>
  </div>
);
