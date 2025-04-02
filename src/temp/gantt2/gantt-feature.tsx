'use client';

import { FC, ReactNode, useContext, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { DndContext, MouseSensor, useDraggable, useSensor } from '@dnd-kit/core';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import { useMouse } from '@uidotdev/usehooks';
import { addDays, differenceInDays, formatDate } from 'date-fns';

import { Card } from '../../components/ui/card';
import { useGanttDragging, useGanttScrollX } from '../../components/gantt/gantt';
import { GanttContext } from './gantt-provider';
import {
  getColorFromId,
  getDateByMousePosition,
  getDifferenceIn,
  getInnerDifferenceIn,
  getLightColor,
  getOffset,
  getWidth,
} from './gantt-utils';

export type GanttFeature = {
  id: string;
  name: string;
  stays: {
    startAt: Date;
    endAt: Date;
    guest: string;
  }[];
};

export type GanttFeatureDragHelperProps = {
  featureId: GanttFeature['id'];
  direction: 'left' | 'right';
  date: Date | null;
};

export const GanttFeatureDragHelper: FC<GanttFeatureDragHelperProps> = ({
  direction,
  featureId,
  date,
}) => {
  const [, setDragging] = useGanttDragging();
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: `feature-drag-helper-${featureId}`,
  });

  const isPressed = Boolean(attributes['aria-pressed']);

  useEffect(() => setDragging(isPressed), [isPressed, setDragging]);

  return (
    <div
      className={cn(
        'group -translate-y-1/2 !cursor-col-resize absolute top-1/2 z-[3] h-full w-6 rounded-md outline-none',
        direction === 'left' ? '-left-2.5' : '-right-2.5',
      )}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <div
        className={cn(
          '-translate-y-1/2 absolute top-1/2 h-[80%] w-1 rounded-sm bg-muted-foreground opacity-0 transition-all',
          direction === 'left' ? 'left-2.5' : 'right-2.5',
          direction === 'left' ? 'group-hover:left-0' : 'group-hover:right-0',
          isPressed && (direction === 'left' ? 'left-0' : 'right-0'),
          'group-hover:opacity-100',
          isPressed && 'opacity-100',
        )}
      />
      {date && (
        <div
          className={cn(
            '-translate-x-1/2 absolute top-10 hidden whitespace-nowrap rounded-lg border border-border/50 bg-background/90 px-2 py-1 text-foreground text-xs backdrop-blur-lg group-hover:block',
            isPressed && 'block',
          )}
        >
          {formatDate(date, 'MMM dd, yyyy')}
        </div>
      )}
    </div>
  );
};

export type GanttFeatureItemCardProps = Pick<GanttFeature, 'id'> & {
  children?: ReactNode;
  feature: GanttFeature;
};

export const GanttFeatureItemCard: FC<GanttFeatureItemCardProps> = ({ id, feature, children }) => {
  const [, setDragging] = useGanttDragging();
  const { attributes, listeners, setNodeRef } = useDraggable({ id });
  const isPressed = Boolean(attributes['aria-pressed']);

  useEffect(() => setDragging(isPressed), [isPressed, setDragging]);

  const baseColor = getColorFromId(feature.id);
  const lightColor = getLightColor(baseColor);

  return (
    <Card
      className="h-full w-full rounded-md p-2 text-xs shadow-sm"
      style={{
        borderLeft: `4px solid ${baseColor}`,
        backgroundColor: lightColor,
      }}
    >
      <div
        className={cn(
          'flex h-full w-full items-center justify-between gap-2 text-left',
          isPressed && 'cursor-grabbing',
        )}
        {...attributes}
        {...listeners}
        ref={setNodeRef}
      >
        {children}
      </div>
    </Card>
  );
};

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
          {children}
        </OccupancyBar>
      ))}
    </div>
  );
};

export type OccupancyBarProps = {
  featureId: string;
  occupancy: GanttFeature['stays'][0];
  timelineStartDate: Date;
  onMove?: (id: string, startAt: Date, endAt: Date) => void;
  children?: ReactNode;
  className?: string;
  feature: GanttFeature;
};

export const OccupancyBar: FC<OccupancyBarProps> = ({
  featureId,
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

  const onDragEnd = () => onMove?.(featureId, startAt, endAt);

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
            <GanttFeatureDragHelper direction="left" featureId={featureId} date={startAt} />
          </DndContext>
        )}
        <DndContext
          sensors={[mouseSensor]}
          modifiers={[restrictToHorizontalAxis]}
          onDragStart={handleItemDragStart}
          onDragMove={handleItemDragMove}
          onDragEnd={onDragEnd}
        >
          <GanttFeatureItemCard id={featureId} feature={feature}>
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
            <GanttFeatureDragHelper direction="right" featureId={featureId} date={endAt} />
          </DndContext>
        )}
      </div>
    </div>
  );
};
