import React from 'react';
// import get from 'lodash/get';
import CalendarBase from 'antd/es/calendar';
import moment from 'moment';
import HighlightedCell from '../../../UI/atoms/HighlightedCell';

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
        if (highlightedDates
              .filter(e => !date.startOf('day')
                .diff(e.startOf('day'), 'days')).length
            ) {
          return (
            <HighlightedCell />
          );
        }
        return '';
      }}
      value={field.value || props.defaultValue || moment()}
      fullscreen={false}
    />
  );
};

export default Calendar;

