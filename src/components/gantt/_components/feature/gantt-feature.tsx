import { FC, ReactNode, useContext, useState } from 'react';

import { cn } from '@/lib/utils';
import { DndContext, MouseSensor, useSensor } from '@dnd-kit/core';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import { useMouse } from '@uidotdev/usehooks';
import { addDays, differenceInDays } from 'date-fns';

import { GanttContext } from '../../_contexts/context';
import { getAddRange, getDifferenceIn, getInnerDifferenceIn } from '../../_utils/dates';
import { getDateByMousePosition, getOffset, getWidth } from '../../_utils/positioning';
import { useGanttScrollX } from '../../hooks';
import GanttFeatureDragHelper from './gantt-feature-drag-helper';
import { GanttFeatureItemCard } from './gantt-feature-item-card';

export type GanttFeature = {
  id: string;
  name: string;
  stays: {
    startAt: Date;
    endAt: Date;
    guest: string;
  }[];
};

export type GanttFeatureProps = {
  feature: GanttFeature;
  occupancy: GanttFeature['stays'][0];
  timelineStartDate: Date;
  onMove?: (id: string, startAt: Date, endAt: Date) => void;
  children?: ReactNode;
  className?: string;
};

export const GanttFeature: FC<GanttFeatureProps> = ({
  feature,
  occupancy,
  timelineStartDate,
  onMove,
  children,
  className,
}) => {
  const gantt = useContext(GanttContext);
  const [scrollX] = useGanttScrollX();
  const [startAt, setStartAt] = useState<Date>(occupancy.startAt);
  const [endAt, setEndAt] = useState<Date>(occupancy.endAt);
  const width = getWidth(startAt, endAt, gantt);
  const offset = getOffset(startAt, timelineStartDate, gantt);
  const addRange = getAddRange(gantt.range);
  const [mousePosition] = useMouse<HTMLDivElement>();

  const [previousMouseX, setPreviousMouseX] = useState(0);
  const [previousStartAt, setPreviousStartAt] = useState(startAt);
  const [previousEndAt, setPreviousEndAt] = useState(endAt);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const handleItemDragStart = () => {
    setPreviousMouseX(mousePosition.x);
    setPreviousStartAt(startAt);
    setPreviousEndAt(endAt);
  };

  const handleItemDragMove = () => {
    const currentDate = getDateByMousePosition(gantt, mousePosition.x);
    const originalDate = getDateByMousePosition(gantt, previousMouseX);
    const delta =
      gantt.range === 'daily'
        ? getDifferenceIn(gantt.range)(currentDate, originalDate)
        : getInnerDifferenceIn(gantt.range)(currentDate, originalDate);
    const newStartDate = addDays(previousStartAt, delta);
    const newEndDate = addDays(previousEndAt, delta);

    setStartAt(newStartDate);
    setEndAt(newEndDate);
  };

  const handleLeftDragMove = () => {
    const ganttRect = gantt.ref?.current?.getBoundingClientRect();
    const x = mousePosition.x - (ganttRect?.left ?? 0) + scrollX - gantt.sidebarWidth;
    const newStartAt = getDateByMousePosition(gantt, x);

    setStartAt(newStartAt);
  };

  const handleRightDragMove = () => {
    const ganttRect = gantt.ref?.current?.getBoundingClientRect();
    const x = mousePosition.x - (ganttRect?.left ?? 0) + scrollX - gantt.sidebarWidth;
    const newEndAt = getDateByMousePosition(gantt, x);

    setEndAt(newEndAt);
  };

  const onDragEnd = () => onMove?.(feature.id, startAt, endAt);

  return (
    <div
      className={cn('relative flex w-max min-w-full py-0.5', className)}
      style={{ height: 'var(--gantt-row-height)' }}
    >
      <div
        className="pointer-events-auto absolute top-0.5"
        style={{
          height: 'calc(var(--gantt-row-height) - 4px)',
          width: Math.round(width),
          left: Math.round(offset),
        }}
      >
        {onMove && (
          <DndContext
            sensors={[mouseSensor]}
            modifiers={[restrictToHorizontalAxis]}
            onDragMove={handleLeftDragMove}
            onDragEnd={onDragEnd}
          >
            <GanttFeatureDragHelper direction="left" featureId={feature.id} date={startAt} />
          </DndContext>
        )}
        <DndContext
          sensors={[mouseSensor]}
          modifiers={[restrictToHorizontalAxis]}
          onDragStart={handleItemDragStart}
          onDragMove={handleItemDragMove}
          onDragEnd={onDragEnd}
        >
          <GanttFeatureItemCard feature={feature}>
            {children ?? (
              <p className="flex-1 truncate text-xs">
                {occupancy.guest} ({differenceInDays(endAt, startAt)} days)
              </p>
            )}
          </GanttFeatureItemCard>
        </DndContext>
        {onMove && (
          <DndContext
            sensors={[mouseSensor]}
            modifiers={[restrictToHorizontalAxis]}
            onDragMove={handleRightDragMove}
            onDragEnd={onDragEnd}
          >
            <GanttFeatureDragHelper direction="right" featureId={feature.id} date={endAt} />
          </DndContext>
        )}
      </div>
    </div>
  );
};
