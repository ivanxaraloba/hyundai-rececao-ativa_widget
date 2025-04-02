import { useState } from 'react';

import { addDays, addMonths, endOfMonth, set, startOfMonth, subDays, subMonths } from 'date-fns';
import { EyeIcon, LinkIcon, TrashIcon } from 'lucide-react';

import {
  GanttCreateMarkerTrigger,
  GanttFeatureItem,
  GanttFeatureList,
  GanttHeader,
  GanttMarker,
  GanttProvider,
  GanttSidebar,
  GanttSidebarItem,
  GanttTimeline,
  GanttToday,
  Range,
} from '@/components/gantt/_index';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { Button } from './components/ui/button';
import { Slider } from './components/ui/slider';

const today = new Date();

const exampleStatuses = [
  { id: '1', name: 'Available', color: '#10B981' },
  { id: '2', name: 'Occupied', color: '#F59E0B' },
  { id: '3', name: 'Maintenance', color: '#6B7280' },
];

const exampleFeatures = [
  {
    id: '1',
    name: 'Beach House',
    status: exampleStatuses[0],
    occupancies: [
      {
        startAt: new Date(),
        endAt: addDays(today, 6),
        guest: 'Lucy Smith',
      },
      {
        startAt: addDays(today, 10),
        endAt: addDays(today, 15),
        guest: 'John Doe',
      },
    ],
  },
  {
    id: '2',
    name: 'Mountain Cabin',
    status: exampleStatuses[0],
    occupancies: [
      {
        startAt: addDays(today, 7),
        endAt: addDays(today, 12),
        guest: 'Richard Roe',
      },
    ],
  },
  {
    id: '3',
    name: 'City Apartment',
    status: exampleStatuses[2], // Maintenance
    occupancies: [],
  },
];

const exampleMarkers = [
  {
    id: '1',
    date: startOfMonth(subMonths(today, 3)),
    label: 'High Season Start',
    className: 'bg-blue-100 text-blue-900',
  },
  {
    id: '2',
    date: subMonths(endOfMonth(today), 2),
    label: 'Low Season Start',
    className: 'bg-green-100 text-green-900',
  },
];

const Demo = () => {
  const [features, setFeatures] = useState(exampleFeatures);
  const [range, setRange] = useState<Range>('daily');
  const [zoom, setZoom] = useState<number>(100);

  const handleViewFeature = (id: string) => console.log(`Property selected: ${id}`);

  const handleCopyLink = (id: string) => console.log(`Copy link: ${id}`);

  const handleRemoveFeature = (id: string) =>
    setFeatures((prev) => prev.filter((feature) => feature.id !== id));

  const handleRemoveMarker = (id: string) => console.log(`Remove marker: ${id}`);

  const handleCreateMarker = (date: Date) => console.log(`Create marker: ${date.toISOString()}`);

  const handleMoveFeature = (id: string, startAt: Date, endAt: Date) => {
    setFeatures((prev) =>
      prev.map((feature) => {
        if (feature.id === id) {
          // Find the occupancy that matches these dates and update it
          const updatedOccupancies = feature.occupancies.map((occupancy) => {
            if (
              occupancy.startAt.getTime() === startAt.getTime() &&
              occupancy.endAt.getTime() === endAt.getTime()
            ) {
              return { ...occupancy, startAt, endAt };
            }
            return occupancy;
          });
          return { ...feature, occupancies: updatedOccupancies };
        }
        return feature;
      }),
    );
  };

  const handleAddFeature = (date: Date) => {
    // Here you would typically open a dialog to create a new occupancy
    console.log(`Add occupancy: ${date.toISOString()}`);
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
      <GanttProvider
        onAddItem={handleAddFeature}
        range={range}
        zoom={zoom}
        className="border h-[500px]"
      >
        <GanttSidebar>
          <div className="divide-y">
            {features.map((feature) => (
              <GanttSidebarItem
                key={feature.id}
                feature={feature}
                onSelectItem={handleViewFeature}
              />
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
                    <button type="button" onClick={() => handleViewFeature(feature.id)}>
                      <GanttFeatureItem onMove={handleMoveFeature} feature={feature} />
                    </button>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem
                      className="flex items-center gap-2"
                      onClick={() => handleViewFeature(feature.id)}
                    >
                      <EyeIcon className="size-4 text-muted-foreground" />
                      View property
                    </ContextMenuItem>
                    <ContextMenuItem
                      className="flex items-center gap-2"
                      onClick={() => handleCopyLink(feature.id)}
                    >
                      <LinkIcon className="size-4 text-muted-foreground" />
                      Copy link
                    </ContextMenuItem>
                    <ContextMenuItem
                      className="flex items-center gap-2 text-destructive"
                      onClick={() => handleRemoveFeature(feature.id)}
                    >
                      <TrashIcon className="size-4" />
                      Remove property
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </div>
            ))}
          </GanttFeatureList>
          {exampleMarkers.map((marker) => (
            <GanttMarker key={marker.id} {...marker} onRemove={handleRemoveMarker} />
          ))}
          <GanttToday />
          <GanttCreateMarkerTrigger onCreateMarker={handleCreateMarker} />
        </GanttTimeline>
      </GanttProvider>
    </div>
  );
};

export default Demo;
