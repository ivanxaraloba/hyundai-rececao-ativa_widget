'use client';

import { FC, ReactNode } from 'react';

import { cn } from '@/lib/utils';

export type GanttTimelineProps = {
  children: ReactNode;
  className?: string;
};

export type TimelineData = {
  year: number;
  quarters: {
    months: {
      days: number;
    }[];
  }[];
}[];

export const GanttTimeline: FC<GanttTimelineProps> = ({ children, className }) => (
  <div className={cn('relative flex h-full w-max flex-none overflow-clip', className)}>
    {children}
  </div>
);
