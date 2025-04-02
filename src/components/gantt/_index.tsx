import { useState } from 'react';

import { addDays, addMonths, endOfMonth, set, startOfMonth, subDays, subMonths } from 'date-fns';
import { EyeIcon, LinkIcon, TrashIcon } from 'lucide-react';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';
import { GanttTimeline } from './content/gantt-timeline';
import { GanttFeatureItem } from './feature/gantt-feature-item';
import { GanttFeatureList } from './feature/gantt-feature-list';
import { GanttHeader } from './header/gantt-header';
import { GanttCreateMarkerTrigger } from './markers/gantt-create-market-trigger';
import { GanttMarker } from './markers/gantt-marker';
import { GanttToday } from './markers/gantt-today';
import GanttProvider from './provider';
import { GanttSidebar } from './sidebar/gantt-sidebar';
import { GanttSidebarItem } from './sidebar/gantt-sidebar-item';
import { GANTT_DEMO_FEATURES, GANTT_DEMO_MARKERS } from './utils-constants';
import { Range } from './utils-dates';

export default function Gantt() {
  const [features, setFeatures] = useState(GANTT_DEMO_FEATURES);
  const [range, setRange] = useState<Range>('daily');
  const [zoom, setZoom] = useState<number>(100);

  const handleMoveFeature = (id: string, startAt: Date, endAt: Date) => {
    setFeatures((prev) =>
      prev.map((feature) => {
        if (feature.id === id) {
          const updatedOccupancies = feature.stays.map((occupancy) => {
            if (
              occupancy.startAt.getTime() === startAt.getTime() &&
              occupancy.endAt.getTime() === endAt.getTime()
            ) {
              return { ...occupancy, startAt, endAt };
            }
            return occupancy;
          });
          return { ...feature, stays: updatedOccupancies };
        }
        return feature;
      }),
    );
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between w-full mb-2">
        <div className="w-full max-w-72">
          <Slider
            value={[zoom]}
            max={150}
            min={50}
            step={1}
            onValueChange={(val: number[]) => setZoom(val[0])}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" onClick={() => setRange('daily')}>
            Daily
          </Button>
          <Button size="sm" variant="outline" onClick={() => setRange('monthly')}>
            Monthly
          </Button>
          <Button size="sm" variant="outline" onClick={() => setRange('quarterly')}>
            Quarterly
          </Button>
        </div>
      </div>
      <GanttProvider onAddItem={() => null} range={range} zoom={zoom} className="border h-[500px]">
        <GanttSidebar>
          <div className="divide-y divide-border/50">
            {features.map((feature) => (
              <GanttSidebarItem key={feature.id} feature={feature} onSelectItem={() => null} />
            ))}
          </div>
        </GanttSidebar>
        <GanttTimeline>
          <GanttHeader />
          <GanttFeatureList>
            {features.map((feature) => (
              <div className="flex" key={feature.id}>
                <ContextMenu>
                  <ContextMenuTrigger asChild>
                    <button type="button">
                      <GanttFeatureItem onMove={handleMoveFeature} feature={feature} />
                    </button>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem className="flex items-center gap-2">
                      <EyeIcon className="size-4 text-muted-foreground" />
                      View property
                    </ContextMenuItem>
                    <ContextMenuItem className="flex items-center gap-2">
                      <LinkIcon className="size-4 text-muted-foreground" />
                      Copy link
                    </ContextMenuItem>
                    <ContextMenuItem className="flex items-center gap-2 text-destructive">
                      <TrashIcon className="size-4" />
                      Remove property
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </div>
            ))}
          </GanttFeatureList>
          {GANTT_DEMO_MARKERS.map((marker) => (
            <GanttMarker key={marker.id} {...marker} />
          ))}
          <GanttToday />
          <GanttCreateMarkerTrigger onCreateMarker={() => null} />
        </GanttTimeline>
      </GanttProvider>
    </div>
  );
}
