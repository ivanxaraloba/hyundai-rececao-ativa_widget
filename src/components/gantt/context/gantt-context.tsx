import { createContext, RefObject } from 'react';

import { TimelineData } from '../components/content/gantt-timeline';
import { Range } from '../utils/gantt-date';

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

const DEFAULT_SIZES = {
  headerHeight: 60,
  sidebarWidth: 300,
  rowHeight: 38,
  baseColumnWidth: 50,
  monthlyColumnWidth: 150,
  quarterlyColumnWidth: 100,
};

export const GanttContext = createContext<GanttContextProps>({
  zoom: 100,
  range: 'monthly',
  columnWidth: DEFAULT_SIZES.baseColumnWidth,
  headerHeight: DEFAULT_SIZES.headerHeight,
  sidebarWidth: DEFAULT_SIZES.sidebarWidth,
  rowHeight: DEFAULT_SIZES.rowHeight,
  onAddItem: undefined,
  placeholderLength: 2,
  timelineData: [],
  ref: null,
});

export { DEFAULT_SIZES };
