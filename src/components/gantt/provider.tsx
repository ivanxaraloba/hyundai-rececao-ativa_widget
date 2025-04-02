import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';

import { cn } from '@/lib/utils';
import { getDaysInMonth } from 'date-fns';
import throttle from 'lodash.throttle';

import {
  calculateInnerOffset,
  createInitialTimelineData,
} from '@/components/gantt/utils-positioning';
import { TimelineData } from './content/gantt-timeline';
import { GANTT_SIZES, GanttContext, type GanttContextProps } from './context';
import { useGanttScrollX } from './hooks';
import { getDifferenceIn, Range } from './utils-dates';

export type GanttProviderProps = {
  zoom?: number;
  range?: Range;
  onAddItem?: (date: Date) => void;
  children: ReactNode;
  className?: string;
};

export default function GanttProvider({
  zoom = 100,
  range = 'monthly',
  onAddItem,
  children,
  className,
}: GanttProviderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [timelineData, setTimelineData] = useState(createInitialTimelineData(new Date()));
  const [, setScrollX] = useGanttScrollX();
  const sidebarElement = scrollRef.current?.querySelector('[data-roadmap-ui="gantt-sidebar"]');

  const sidebarWidth = sidebarElement ? GANTT_SIZES.sidebarWidth : 0;
  let columnWidth = GANTT_SIZES.baseColumnWidth;

  if (range === 'monthly') {
    columnWidth = GANTT_SIZES.monthlyColumnWidth;
  } else if (range === 'quarterly') {
    columnWidth = GANTT_SIZES.quarterlyColumnWidth;
  }

  const cssVariables = {
    '--gantt-zoom': `${zoom}`,
    '--gantt-column-width': `${(zoom / 100) * columnWidth}px`,
    '--gantt-header-height': `${GANTT_SIZES.headerHeight}px`,
    '--gantt-row-height': `${GANTT_SIZES.rowHeight}px`,
    '--gantt-sidebar-width': `${sidebarWidth}px`,
  } as CSSProperties;

  useEffect(() => {
    if (scrollRef.current) {
      const today = new Date();
      const timelineStartDate = new Date(timelineData[0]?.year ?? 0, 0, 1);
      const differenceIn = getDifferenceIn(range);
      const offset = differenceIn(today, timelineStartDate);
      const innerOffset = calculateInnerOffset(today, range, (columnWidth * zoom) / 100);

      // Calculate the position to scroll to, showing today's date at ~30% of the viewport width
      const scrollPosition =
        offset * ((columnWidth * zoom) / 100) + innerOffset - scrollRef.current.clientWidth * 0.15; // Changed from 0.5 (50%) to 0.3 (30%)

      scrollRef.current.scrollLeft = Math.max(0, scrollPosition);
      setScrollX(scrollRef.current.scrollLeft);
    }
  }, [range, zoom, timelineData, columnWidth, setScrollX]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: "Throttled"
  const handleScroll = useCallback(
    throttle(() => {
      if (!scrollRef.current) {
        return;
      }

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setScrollX(scrollLeft);

      if (scrollLeft === 0) {
        // Extend timelineData to the past
        const firstYear = timelineData[0]?.year;

        if (!firstYear) {
          return;
        }

        const newTimelineData: TimelineData = [...timelineData];
        newTimelineData.unshift({
          year: firstYear - 1,
          quarters: new Array(4).fill(null).map((_, quarterIndex) => ({
            months: new Array(3).fill(null).map((_, monthIndex) => {
              const month = quarterIndex * 3 + monthIndex;
              return {
                days: getDaysInMonth(new Date(firstYear, month, 1)),
              };
            }),
          })),
        });

        setTimelineData(newTimelineData);

        // Scroll a bit forward so it's not at the very start
        scrollRef.current.scrollLeft = scrollRef.current.clientWidth;
        setScrollX(scrollRef.current.scrollLeft);
      } else if (scrollLeft + clientWidth >= scrollWidth) {
        // Extend timelineData to the future
        const lastYear = timelineData.at(-1)?.year;

        if (!lastYear) {
          return;
        }

        const newTimelineData: TimelineData = [...timelineData];
        newTimelineData.push({
          year: lastYear + 1,
          quarters: new Array(4).fill(null).map((_, quarterIndex) => ({
            months: new Array(3).fill(null).map((_, monthIndex) => {
              const month = quarterIndex * 3 + monthIndex;
              return {
                days: getDaysInMonth(new Date(lastYear, month, 1)),
              };
            }),
          })),
        });

        setTimelineData(newTimelineData);

        // Scroll a bit back so it's not at the very end
        scrollRef.current.scrollLeft =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        setScrollX(scrollRef.current.scrollLeft);
      }
    }, 100),
    [timelineData, setScrollX],
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <GanttContext.Provider
      value={{
        zoom,
        range,
        headerHeight: GANTT_SIZES.headerHeight,
        columnWidth,
        sidebarWidth,
        rowHeight: GANTT_SIZES.rowHeight,
        onAddItem,
        timelineData,
        placeholderLength: 2,
        ref: scrollRef,
      }}
    >
      <div
        className={cn(
          'gantt relative grid h-full w-full flex-none select-none overflow-auto rounded-sm bg-secondary',
          range,
          className,
        )}
        style={{
          ...cssVariables,
          gridTemplateColumns: 'var(--gantt-sidebar-width) 1fr',
        }}
        ref={scrollRef}
      >
        {children}
      </div>
    </GanttContext.Provider>
  );
}
