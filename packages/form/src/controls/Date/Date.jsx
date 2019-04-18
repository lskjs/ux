import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import PropTypes from 'prop-types';
import DatePickerBase from './Datepicker';
import globalStyles from './Date.styles';
import { globalStylesCalendar } from '../Calendar/Calendar.styles';

globalStyles();
globalStylesCalendar();

const DatePicker = (data) => {
  const {
    field,
    form,
    ranged,
    t,
    futureOnly,
    showTime,
    ...props
  } = data;
  let dateFormat;
  if (!showTime) {
    dateFormat = t && t('format.date') || 'DD.MM.YYYY';
  } else {
    dateFormat = t && t('format.dateTime') || 'DD.MM.YYYY HH:mm';
  }
  const locale = t && t('locale') || 'ru';
  let value = field.value && moment(new Date(field.value), dateFormat, locale) || null; // eslint-disable-line
  let change = (val) => {
    form.setFieldValue(field.name, val);
  };

  if (ranged) {
    value = [
      (field.value && field.value.length && field.value[0] && moment(new Date(field.value[0]))) || null,
      (field.value && field.value.length && field.value[1] && moment(new Date(field.value[1]))) || null,
    ];
    change = async (range) => {
      form.setFieldValue(field.name, range);
      // field.onChange(
      //   {
      //     target: {
      //       name: field.name,
      //       value: range[0],
      //     },
      //   },
      //   // range[0].toDate(),
      //   // range[1].toDate(),
      // );
    };
  }
  let disabledDate = () => false;
  if (futureOnly) {
    disabledDate = (current) => {
      // Can not select days before today and today
      return current.valueOf() < Date.now();
    };
  }
  return (
    <DatePickerBase
      {...field}
      {...props}
      showTime={showTime}
      id={(field.name || '').replace(/\./g, '')}
      ranged={ranged}
      validationState={form.errors[field.name] ? 'error' : null}
      onChange={change}
        // await this.handleChangeField(name1)(range[0].toDate());
        // await this.handleChangeField(name2)(range[1].toDate());
      value={value}
      format={dateFormat}
      disabledDate={disabledDate}
      // onBlur={e => console.log('bluuuuurr', { e })}
    />
  );
};


// DatePicker.propTypes = {
//   ranged: PropTypes.bool,
//   futureOnly: PropTypes.bool,
// };

// DatePicker.defaultProps = {
//   ranged: PropTypes.bool,
//   futureOnly: PropTypes.bool,
// };

export default DatePicker;

