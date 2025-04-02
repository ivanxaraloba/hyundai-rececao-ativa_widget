import { FC, ReactNode, useEffect } from 'react';

import { cn } from '@/lib/utils';
import { useDraggable } from '@dnd-kit/core';

import { Card } from '@/components/ui/card';
import { useGanttDragging } from '../hooks';
import { getColorFromId, getLightColor } from '../utils-colors';
import { GanttFeature } from './gantt-feature';

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
