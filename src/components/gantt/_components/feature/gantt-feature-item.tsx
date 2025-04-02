import { FC, ReactNode, useContext } from 'react';

import { cn } from '@/lib/utils';
import { differenceInDays } from 'date-fns';

import { GanttContext } from '../../_contexts/context';
import { GanttFeature } from './gantt-feature';

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
      className={cn('relative flex w-max min-w-full', className)}
      style={{ height: 'var(--gantt-row-height)' }}
    >
      {feature.stays.map((occupancy, index) => (
        <GanttFeature
          key={`${feature.id}-${index}`}
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
        </GanttFeature>
      ))}
    </div>
  );
};
