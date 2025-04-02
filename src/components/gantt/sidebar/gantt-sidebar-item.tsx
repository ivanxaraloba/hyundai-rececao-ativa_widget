import { FC } from 'react';
import { cn } from '@/lib/utils';
import { GanttFeature } from '@/components/gantt/feature/gantt-feature';
import { getColorFromId } from '@/components/gantt/utils-colors';

export type GanttSidebarItemProps = {
  feature: GanttFeature;
  onSelectItem?: (id: string) => void;
  className?: string;
};

export const GanttSidebarItem: FC<GanttSidebarItemProps> = ({ feature, className }) => (
  <div
    role="button"
    tabIndex={0}
    key={feature.id}
    className={cn('relative flex items-center gap-2.5 p-2.5 text-xs', className)}
    style={{ height: 'var(--gantt-row-height)' }}
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