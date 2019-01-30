import React, { Component } from 'react';
// import get from 'lodash/get';
import autobind from 'core-decorators/lib/autobind';
import CalendarBase from 'antd/es/calendar';
import moment from 'moment';
import HighlightedCell from '../../../UI/atoms/HighlightedCell';

class Calendar extends Component {
  @autobind
  validationDate(value) {
    const { field, form, ...props } = this.props;
    let validValue = moment();
    const isAnyTypeDate = f => (new Date(f)).getTime() > 0;
    if (isAnyTypeDate(value) && moment.isDate(value)) {
      validValue = moment(value);
    } else if (isAnyTypeDate(props.defaultValue) && moment.isDate(props.defaultValue)) {
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
        value={this.validationDate(field.value)}
        fullscreen={false}
      />
    );
  }
}

export default Calendar;

