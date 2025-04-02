import { FC, useContext } from 'react';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { GanttContext } from '../context';
import { GanttColumns } from '../content/gantt-columns';
import { GanttContentHeader } from '../content/gantt-content-header';

export const GanttHeaderMonthly: FC = () => {
  const gantt = useContext(GanttContext);

  return gantt.timelineData.map((year) => (
    <div className="relative flex flex-col" key={year.year}>
      <GanttContentHeader
        title={`${year.year}`}
        columns={year.quarters.flatMap((quarter) => quarter.months).length}
        renderHeaderItem={(item: number) => (
          <p>{format(new Date(year.year, item, 1), 'MMM', { locale: pt })}</p>
        )}
      />
      <GanttColumns columns={year.quarters.flatMap((quarter) => quarter.months).length} />
    </div>
  ));
};
