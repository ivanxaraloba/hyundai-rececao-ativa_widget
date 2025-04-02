import { FC, useContext } from 'react';

import { cn } from '@/lib/utils';
import { useMouse } from '@uidotdev/usehooks';
import { PlusIcon } from 'lucide-react';

import { GanttContext } from '@/components/gantt/_contexts/context';
import { getDateByMousePosition } from '@/components/gantt/_utils/positioning';
import { useGanttScrollX } from '../../hooks';

export type GanttFeatureHelperProps = {
  top: number;
  className?: string;
};

export const GanttFeatureHelper: FC<GanttFeatureHelperProps> = ({ top, className }) => {
  const [scrollX] = useGanttScrollX();
  const gantt = useContext(GanttContext);
  const [mousePosition, mouseRef] = useMouse<HTMLDivElement>();

  const handleClick = () => {
    const ganttRect = gantt.ref?.current?.getBoundingClientRect();
    const x = mousePosition.x - (ganttRect?.left ?? 0) + scrollX - gantt.sidebarWidth;
    const currentDate = getDateByMousePosition(gantt, x);

    gantt.onAddItem?.(currentDate);
  };

  return (
    <div
      className={cn('absolute top-0 w-full px-0.5', className)}
      style={{
        marginTop: -gantt.rowHeight / 2,
        transform: `translateY(${top}px)`,
      }}
      ref={mouseRef}
    >
      <button
        onClick={handleClick}
        type="button"
        className="flex h-full w-full items-center justify-center rounded-md border border-dashed p-2"
      >
        <PlusIcon size={16} className="pointer-events-none select-none text-muted-foreground" />
      </button>
    </div>
  );
};
