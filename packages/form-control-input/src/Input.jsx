import React from 'react';

import BaseInput from './BaseInput';

export const Input = ({ field, form, format = () => ({}), ...props }) => {
  // TODO: !!get(form.errors, field.name);
  const hasError = field && field.name && !!form.errors[field.name];
  return (
    <BaseInput
      {...field}
      value={field.value || ''}
      debounce={0}
      {...props}
      style={{ border: hasError ? '1px solid red' : '' }}
      onChange={(value) => {
        form.setFieldValue(field.name, value);
      }}
      {...format({ field, form, ...props })}
    />
  );
};

export default Input;
