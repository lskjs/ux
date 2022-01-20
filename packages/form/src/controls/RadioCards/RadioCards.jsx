import get from 'lodash/get';
import React from 'react';

import RadioCardsBase from './RadioCardsBase/RadioCards';

const RadioCards = ({ field, form, ...props }) => (
  <RadioCardsBase
    {...field}
    {...props}
    value={field.value}
    validationState={form.errors[field.name] ? 'error' : null}
    onChange={(value) => {
      form.setFieldValue(field.name, value);
    }}
    options={props.options}
  />
);

export default RadioCards;
