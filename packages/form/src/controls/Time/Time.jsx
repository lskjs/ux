import 'moment/locale/ru';

import moment from 'moment';
import React from 'react';

import globalStyles from './Time.styles';
import TimePickerBase from './Timepicker';

globalStyles();

const Time = (data) => {
  const { field, form, t, dateFormat = 'HH:mm', ...props } = data;
  const locale = (t && t('locale')) || 'ru';
  let value = field.value && moment(new Date(field.value), dateFormat, locale) || null; // eslint-disable-line
  const change = (val) => {
    form.setFieldValue(field.name, val);
  };
  return (
    <TimePickerBase
      {...field}
      {...props}
      id={(field.name || '').replace(/\./g, '')}
      validationState={form.errors[field.name] ? 'error' : null}
      onChange={change}
      value={value}
      format={dateFormat}
    />
  );
};

export default Time;
