import React from 'react';
import get from 'lodash/get';
import BaseInput from '../../components/BaseInput';

const Input = ({
  field,
  form,
  format = () => ({}),
  ...props
}) => {
  const hasError = field && field.name && !!get(form, `errors.${field.name}`);
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
