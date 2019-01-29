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
  let validValue = moment();
  const isAnyTypeDate = f => (new Date(f)).getTime() > 0;
  if (moment.isDate(field.value) || isAnyTypeDate(field.value)) {
    validValue = moment(field.value);
  } else if (moment.isDate(props.defaultValue) || isAnyTypeDate(props.defaultValue)) {
    validValue = moment(props.defaultValue);
  }
  return (
    <CalendarBase
      {...field}
      {...props}
      onChange={(value) => {
        const selectedDate = new Date(value);
        form.setFieldValue(field.name, selectedDate);
      }}
      dateCellRender={(date) => {
        if ((highlightedDates || [])
              .filter(e => !date.startOf('day')
                .diff(e.startOf('day'), 'days')).length
            ) {
          return (
            <HighlightedCell />
          );
        }
        return '';
      }}
      value={validValue}
      fullscreen={false}
    />
  );
};

export default Calendar;

