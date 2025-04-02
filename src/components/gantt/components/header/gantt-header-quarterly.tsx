import { FC, useContext } from 'react';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { GanttContext } from '../../context/gantt-context';
import { GanttColumns } from '../content/gantt-columns';
import { GanttContentHeader } from '../content/gantt-content-header';

export const GanttHeaderQuarterly: FC = () => {
  const gantt = useContext(GanttContext);

  return gantt.timelineData.map((year) =>
    year.quarters.map((quarter, quarterIndex) => (
      <div className="relative flex flex-col" key={`${year.year}-${quarterIndex}`}>
        <GanttContentHeader
          title={`Q${quarterIndex + 1} ${year.year}`}
          columns={quarter.months.length}
          renderHeaderItem={(item: number) => (
            <p>{format(new Date(year.year, quarterIndex * 3 + item, 1), 'MMM', { locale: pt })}</p>
          )}
        />
        <GanttColumns columns={quarter.months.length} />
      </div>
    ))
  );
};
