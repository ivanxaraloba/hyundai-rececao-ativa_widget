import { createContext, RefObject } from 'react';

import { TimelineData } from './content/gantt-timeline';
import { GANTT_SIZES } from './utils-constants';
import { Range } from './utils-dates';

export type GanttContextProps = {
  zoom: number;
  range: Range;
  columnWidth: number;
  sidebarWidth: number;
  headerHeight: number;
  rowHeight: number;
  onAddItem: ((date: Date) => void) | undefined;
  placeholderLength: number;
  timelineData: TimelineData;
  ref: RefObject<HTMLDivElement | null> | null;
};

export const GanttContext = createContext<GanttContextProps>({
  zoom: 100,
  range: 'monthly',
  columnWidth: GANTT_SIZES.baseColumnWidth,
  headerHeight: GANTT_SIZES.headerHeight,
  sidebarWidth: GANTT_SIZES.sidebarWidth,
  rowHeight: GANTT_SIZES.rowHeight,
  onAddItem: undefined,
  placeholderLength: 2,
  timelineData: [],
  ref: null,
});

export { GANTT_SIZES };
