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
import { GanttTimeline } from './components/content/gantt-timeline';
import { GanttFeatureItem } from './components/feature/gantt-feature-item';
import { GanttFeatureList } from './components/feature/gantt-feature-list';
import { GanttHeader } from './components/header/gantt-header';
import { GanttCreateMarkerTrigger } from './components/markers/gantt-create-market-trigger';
import { GanttMarker } from './components/markers/gantt-marker';
import { GanttToday } from './components/markers/gantt-today';
import { GanttSidebar } from './components/sidebar/gantt-sidebar';
import { GanttSidebarItem } from './components/sidebar/gantt-sidebar-item';
import GanttProvider from './context/gantt-provider';
import { Range } from './utils/gantt-date';

const today = new Date();

const exampleFeatures = [
  {
    id: '1',
    name: 'Casa da Praia',
    stays: [
      {
        startAt: new Date(),
        endAt: addDays(today, 6),
        guest: 'Luísa Santos',
      },
      {
        startAt: addDays(today, 10),
        endAt: addDays(today, 15),
        guest: 'João Silva',
      },
    ],
  },
  {
    id: '2',
    name: 'Cabana da Serra',
    stays: [
      {
        startAt: addDays(today, 7),
        endAt: addDays(today, 12),
        guest: 'Ricardo Ferreira',
      },
    ],
  },
  {
    id: '3',
    name: 'Apartamento Central',
    stays: [],
  },
  {
    id: '4',
    name: 'Vila do Lago',
    stays: [
      {
        startAt: addDays(today, 2),
        endAt: addDays(today, 8),
        guest: 'Ana Oliveira',
      },
      {
        startAt: addDays(today, 15),
        endAt: addDays(today, 22),
        guest: 'Miguel Costa',
      },
    ],
  },
  {
    id: '5',
    name: 'Casa do Pinhal',
    stays: [
      {
        startAt: subDays(today, 2),
        endAt: addDays(today, 5),
        guest: 'Sofia Rodrigues',
      },
      {
        startAt: addDays(today, 8),
        endAt: addDays(today, 14),
        guest: 'David Martins',
      },
    ],
  },
  {
    id: '6',
    name: 'Quinta do Mar',
    stays: [
      {
        startAt: addDays(today, 1),
        endAt: addDays(today, 4),
        guest: 'Tiago Sousa',
      },
      {
        startAt: addDays(today, 20),
        endAt: addDays(today, 25),
        guest: 'António Carvalho',
      },
    ],
  },
  {
    id: '7',
    name: 'Loft Urbano',
    stays: [
      {
        startAt: addDays(today, 5),
        endAt: addDays(today, 10),
        guest: 'Mariana Almeida',
      },
    ],
  },
  {
    id: '8',
    name: 'Casa do Campo',
    stays: [
      {
        startAt: addDays(today, 12),
        endAt: addDays(today, 18),
        guest: 'Guilherme Dias',
      },
      {
        startAt: addDays(today, 25),
        endAt: addDays(today, 30),
        guest: 'Beatriz Pinto',
      },
    ],
  },
  {
    id: '9',
    name: 'Quinta do Vale',
    stays: [
      {
        startAt: addDays(today, 3),
        endAt: addDays(today, 7),
        guest: 'Alexandre Ribeiro',
      },
    ],
  },
  {
    id: '10',
    name: 'Casa da Montanha',
    stays: [
      {
        startAt: addDays(today, 8),
        endAt: addDays(today, 15),
        guest: 'Isabel Fonseca',
      },
      {
        startAt: addDays(today, 18),
        endAt: addDays(today, 23),
        guest: 'Lucas Teixeira',
      },
    ],
  },
  {
    id: '11',
    name: 'Chalé do Rio',
    stays: [
      {
        startAt: subDays(today, 1),
        endAt: addDays(today, 3),
        guest: 'Carolina Moreira',
      },
      {
        startAt: addDays(today, 6),
        endAt: addDays(today, 11),
        guest: 'Henrique Nunes',
      },
    ],
  },
  {
    id: '12',
    name: 'Vila dos Jardins',
    stays: [
      {
        startAt: addDays(today, 4),
        endAt: addDays(today, 9),
        guest: 'Madalena Correia',
      },
      {
        startAt: addDays(today, 15),
        endAt: addDays(today, 20),
        guest: 'Bernardo Vieira',
      },
    ],
  },
  {
    id: '13',
    name: 'Penthouse Panorâmica',
    stays: [
      {
        startAt: addDays(today, 1),
        endAt: addDays(today, 7),
        guest: 'Catarina Mendes',
      },
      {
        startAt: addDays(today, 10),
        endAt: addDays(today, 16),
        guest: 'Daniel Ramos',
      },
    ],
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

const Gantt = () => {
  const [features, setFeatures] = useState(exampleFeatures);
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
          {exampleMarkers.map((marker) => (
            <GanttMarker key={marker.id} {...marker} />
          ))}
          <GanttToday />
          <GanttCreateMarkerTrigger onCreateMarker={() => null} />
        </GanttTimeline>
      </GanttProvider>
    </div>
  );
};

export default Gantt;
