'use client';

import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type GanttTimelineProps = {
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

export default function GanttTimeline({ children, className }: GanttTimelineProps) {
  return (
    <div
      id="timeline"
      className={cn('relative flex h-full w-max flex-none overflow-clip', className)}
    >
      {children}
    </div>
  );
}
