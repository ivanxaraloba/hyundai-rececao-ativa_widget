import { FC, useContext } from 'react';
import { format, addDays } from 'date-fns';
import { pt } from 'date-fns/locale';

import { GanttContext } from '../../_contexts/context';
import GanttColumns from '../content/gantt-columns';
import GanttContentHeader from '../content/gantt-content-header';

export const GanttHeaderDaily: FC = () => {
  const gantt = useContext(GanttContext);

  return gantt.timelineData.map((year) =>
    year.quarters
      .flatMap((quarter) => quarter.months)
      .map((month, index) => (
        <div className="relative flex flex-col" key={`${year.year}-${index}`}>
          <GanttContentHeader
            title={format(new Date(year.year, index, 1), 'MMMM yyyy', { locale: pt })}
            columns={month.days}
            renderHeaderItem={(item: number) => (
              <div className="flex items-center justify-center gap-1">
                <p>{format(addDays(new Date(year.year, index, 1), item), 'd')}</p>
                <p className="text-muted-foreground">
                  {format(addDays(new Date(year.year, index, 1), item), 'EEEEE', { locale: pt })}
                </p>
              </div>
            )}
          />
          <GanttColumns
            columns={month.days}
            isColumnSecondary={(item: number) =>
              [0, 6].includes(addDays(new Date(year.year, index, 1), item).getDay())
            }
          />
        </div>
      ))
  );
};
