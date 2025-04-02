import { useContext, useState } from 'react';

import { cn } from '@/lib/utils';
import { useMouse, useThrottle, useWindowScroll } from '@uidotdev/usehooks';

import { GanttContext } from '@/components/gantt/_contexts/context';
import { useGanttDragging } from '../../hooks';
import GanttAddFeatureHelper from '../feature/gantt-feature-add';

type GanttColumnProps = {
  index: number;
  isColumnSecondary?: (item: number) => boolean;
};

export default function GanttColumn({ index, isColumnSecondary }: GanttColumnProps) {
  const gantt = useContext(GanttContext);
  const [dragging] = useGanttDragging();
  const [mousePosition, mouseRef] = useMouse<HTMLDivElement>();
  const [hovering, setHovering] = useState(false);
  const [windowScroll] = useWindowScroll();

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  const top = useThrottle(
    mousePosition.y - (mouseRef.current?.getBoundingClientRect().y ?? 0) - (windowScroll.y ?? 0),
    10,
  );

  return (
    <div
      className={cn(
        'group relative h-full overflow-hidden',
        isColumnSecondary?.(index) ? 'bg-secondary' : '',
      )}
      ref={mouseRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!dragging && hovering && gantt.onAddItem ? <GanttAddFeatureHelper top={top} /> : null}
    </div>
  );
}
