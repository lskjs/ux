import React, { PureComponent } from 'react';
// import get from 'lodash/get';
// import PropTypes from 'prop-types';
import CalendarBase from 'react-calendar';
import autobind from '@lskjs/autobind';
// import moment from 'moment';
// import HighlightedCell from './HighlightedCell';
import { highlightedStyle, calendarStyles } from './highlightedStyle';

calendarStyles();

class Calendar extends PureComponent {
  static isAnyTypeDate(f) {
    return (new Date(f)).getTime() > 0;
  }
  @autobind
  validationDate(value) {
    const { field, ...props } = this.props;
    let validValue = new Date();
    if (this.constructor.isAnyTypeDate(value)) {
      validValue = new Date(value);
    } else if (this.constructor.isAnyTypeDate(props.defaultValue)) {
      validValue = new Date(props.defaultValue);
    }
    return validValue;
  }
  render() {
    const {
      field,
      form,
      highlightedDates,
      futureOnly,
      ...props
    } = this.props;
    return (
      <CalendarBase
        {...field}
        {...props}
        onChange={(value) => {
          const selectedDate = new Date(value);
          console.log(value);
          form.setFieldValue(field.name, selectedDate);
        }}
        tileClassName={({ date }) => {
          const dates = (highlightedDates || []).map(d => this.validationDate(d));
          const isValid = !!dates.filter(e => date.toDateString() === e.toDateString()).length;
          if (isValid) return highlightedStyle;
          return '';
        }}
        value={this.validationDate(field.value)}
        minDate={futureOnly ? new Date() : null}
      />
    );
  }
}

export default Calendar;
