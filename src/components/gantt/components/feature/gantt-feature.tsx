import { FC } from 'react';

import { GanttFeatureItem } from './gantt-feature-item';

export type GanttFeature = {
  id: string;
  name: string;
  stays: {
    startAt: Date;
    endAt: Date;
    guest: string;
  }[];
};

export type GanttFeatureProps = {
  feature: GanttFeature;
  onMove?: (id: string, startDate: Date, endDate: Date) => void;
};

export const GanttFeature: FC<GanttFeatureProps> = ({ feature, onMove }) => (
  <GanttFeatureItem feature={feature} onMove={onMove} />
);
