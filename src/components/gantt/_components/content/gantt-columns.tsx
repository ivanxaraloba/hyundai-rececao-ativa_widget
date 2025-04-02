import { useId } from 'react';

import GanttColumn from './gantt-column';

type GanttColumnsProps = {
  columns: number;
  isColumnSecondary?: (item: number) => boolean;
};

export default function GanttColumns({ columns, isColumnSecondary }: GanttColumnsProps) {
  const id = useId();

  return (
    <div
      className="divide grid h-full w-full divide-x divide-border/50"
      style={{
        gridTemplateColumns: `repeat(${columns}, var(--gantt-column-width))`,
      }}
    >
      {Array.from({ length: columns }).map((_, index) => (
        <GanttColumn key={`${id}-${index}`} index={index} isColumnSecondary={isColumnSecondary} />
      ))}
    </div>
  );
}
