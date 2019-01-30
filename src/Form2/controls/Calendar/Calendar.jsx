import React, { PureComponent } from 'react';
// import get from 'lodash/get';
// import autobind from 'core-decorators/lib/autobind';
import CalendarBase from 'antd/es/calendar';
import moment from 'moment';
import HighlightedCell from '../../../UI/atoms/HighlightedCell';

class Calendar extends PureComponent {
  validationDate(value) {
    const { field, ...props } = this.props;
    let validValue = moment();
    const isAnyTypeDate = f => (new Date(f)).getTime() > 0;
    console.log(value);
    if (!value) {
      return moment(Date.now());
    }
    if (moment.isDate(value) || isAnyTypeDate(value)) {
      validValue = moment(value);
    } else if (moment.isDate(props.defaultValue) || isAnyTypeDate(props.defaultValue)) {
      validValue = moment(props.defaultValue);
    }
    return validValue;
  }
  render() {
    const {
      field,
      form,
      highlightedDates,
      ...props
    } = this.props;
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
        value={console.log(this.validationDate(field.value))}
        fullscreen={false}
      />
    );
  }
}

export default Calendar;

