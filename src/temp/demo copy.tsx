import { useState } from 'react';

import { addDays, addMonths, endOfMonth, set, startOfMonth, subDays, subMonths } from 'date-fns';
import { EyeIcon, LinkIcon, TrashIcon } from 'lucide-react';

import {
  GanttCreateMarkerTrigger,
  GanttFeature,
  GanttFeatureItem,
  GanttFeatureList,
  GanttFeatureListGroup,
  GanttHeader,
  GanttMarker,
  GanttProvider,
  GanttSidebar,
  GanttSidebarGroup,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './components/ui/button';
import { Slider } from './components/ui/slider';

const today = new Date();

const exampleStatuses = [
  { id: '1', name: 'Planned', color: '#6B7280' },
  { id: '2', name: 'In Progress', color: '#F59E0B' },
  { id: '3', name: 'Done', color: '#10B981' },
];

const exampleFeatures = [
  // Property 1 rentals
  {
    id: '1-1', // Unique ID for each rental
    propertyId: '1', // ID to group by property
    name: 'Property 1',
    startAt: new Date(),
    endAt: addDays(today, 6),
    status: exampleStatuses[0],
    group: { id: '1', name: 'Property 1' }, // Group by property instead of company
    guest: {
      name: 'Lucy Smith',
    },
  },
  {
    id: '1-2',
    propertyId: '1',
    name: 'Property 1',
    startAt: addDays(today, 10),
    endAt: addDays(today, 15),
    status: exampleStatuses[1],
    group: { id: '1', name: 'Property 1' },
    guest: {
      name: 'John Doe',
    },
  },
  // Property 2 rentals
  {
    id: '2-1',
    propertyId: '2',
    name: 'Property 2',
    startAt: addDays(today, 7),
    endAt: addDays(today, 12),
    status: exampleStatuses[1],
    group: { id: '2', name: 'Property 2' },
    guest: {
      name: 'Richard Roe',
    },
  },
];

const exampleMarkers = [
  {
    id: '1',
    date: startOfMonth(subMonths(today, 3)),
    label: 'Project Kickoff',
    className: 'bg-blue-100 text-blue-900',
  },
  {
    id: '2',
    date: subMonths(endOfMonth(today), 2),
    label: 'Phase 1 Completion',
    className: 'bg-green-100 text-green-900',
  },
];

const Demo = () => {
  const [features, setFeatures] = useState(exampleFeatures);

  const groupedFeatures: Record<string, typeof features> = features.reduce<
    Record<string, typeof features>
  >((groups, feature) => {
    const propertyName = feature.name; // Group by property name
    return {
      ...groups,
      [propertyName]: [...(groups[propertyName] || []), feature],
    };
  }, {});

  const sortedGroupedFeatures = Object.fromEntries(
    Object.entries(groupedFeatures).sort(([nameA], [nameB]) => nameA.localeCompare(nameB)),
  );

  const handleViewFeature = (id: string) => console.log(`Feature selected: ${id}`);

  const handleCopyLink = (id: string) => console.log(`Copy link: ${id}`);

  const handleRemoveFeature = (id: string) =>
    setFeatures((prev) => prev.filter((feature) => feature.id !== id));

  const handleRemoveMarker = (id: string) => console.log(`Remove marker: ${id}`);

  const handleCreateMarker = (date: Date) => console.log(`Create marker: ${date.toISOString()}`);

  const handleMoveFeature = (id: string, startAt: Date, endAt: Date | null) => {
    if (!endAt) {
      return;
    }

    setFeatures((prev) =>
      prev.map((feature) => (feature.id === id ? { ...feature, startAt, endAt } : feature)),
    );

    console.log(`Move feature: ${id} from ${startAt} to ${endAt}`);
  };

  const handleAddFeature = (date: Date) => console.log(`Add feature: ${date.toISOString()}`);

  const [range, setRange] = useState<Range>('daily');
  const [zoom, setZoom] = useState<number>(100);
  const [action, setAction] = useState<{
    action: 'update' | 'delete';
    item: GanttFeature;
  } | null>(null);

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
          {Object.entries(sortedGroupedFeatures).map(([group, features]) => (
            <GanttSidebarGroup key={group} name={group}>
              {features.map((feature) => (
                <GanttSidebarItem
                  key={feature.id}
                  feature={feature}
                  onSelectItem={handleViewFeature}
                />
              ))}
            </GanttSidebarGroup>
          ))}
        </GanttSidebar>
        <GanttTimeline>
          <GanttHeader />
          <GanttFeatureList>
            {Object.entries(sortedGroupedFeatures).map(([group, features]) => (
              <GanttFeatureListGroup key={group}>
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
                          View feature
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
                          Remove from roadmap
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </div>
                ))}
              </GanttFeatureListGroup>
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
