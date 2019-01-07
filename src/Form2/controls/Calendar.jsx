import React from 'react';
import get from 'lodash/get';
import CalendarBase from 'antd/lib/calendar';

const Calendar = ({
  field,
  form,
  highlightedDates,
  ...props
}) => {
  return (
    <CalendarBase
      {...field}
      {...props}
      onChange={(value) => {
        form.setFieldValue(field.name, value);
        // console.log(value);
      }}
      dateCellRender={(date) => {
        highlightedDates.filter((e) => {
          // console.log(date.startOf('day').diff(e.startOf('day'), 'days'), date.toDate(), e.toDate());
          return !date.diff(e, 'days');
        });
        if (highlightedDates.filter(e => !date.startOf('day').diff(e.startOf('day'), 'days')).length) {
          return (
            <div />
          );
        }
        return '';
      }}
      value={get(form.values, field.name)}
      fullscreen={false}
    />
  );
};

export default Calendar;

