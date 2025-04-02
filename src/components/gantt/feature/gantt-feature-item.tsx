import { FC, ReactNode, useContext } from 'react';

import { cn } from '@/lib/utils';
import { differenceInDays } from 'date-fns';

import type { GanttFeature } from '@/components/gantt/feature/gantt-feature';
import { GanttContext } from '@/components/gantt/context';
import { OccupancyBar } from './occupancy-bar';

export type GanttFeatureItemProps = {
  onMove?: (id: string, startDate: Date, endDate: Date) => void;
  feature: GanttFeature;
  children?: ReactNode;
  className?: string;
};

export const GanttFeatureItem: FC<GanttFeatureItemProps> = ({
  onMove,
  children,
  className,
  feature,
}) => {
  const gantt = useContext(GanttContext);
  const timelineStartDate = new Date(gantt.timelineData.at(0)?.year ?? 0, 0, 1);

  return (
    <div
      className={cn('relative flex w-max min-w-full py-0.5', className)}
      style={{ height: 'var(--gantt-row-height)' }}
    >
      {feature.stays.map((occupancy, index) => (
        <OccupancyBar
          key={`${feature.id}-${index}`}
          featureId={feature.id}
          feature={feature}
          occupancy={occupancy}
          timelineStartDate={timelineStartDate}
          onMove={onMove}
        >
          {children ?? (
            <p className="flex-1 truncate text-xs">
              {occupancy.guest} ({differenceInDays(occupancy.endAt, occupancy.startAt)} days)
            </p>
          )}
        </OccupancyBar>
      ))}
    </div>
  );
};
