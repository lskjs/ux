import React from 'react';
import InputBase from '../../Input';

const Input = ({
  field,
  form,
  ...props
}) => {
  return (
    <InputBase
      {...field}
      debounce={0}
      {...props}
      onChange={(value) => {
        form.setFieldValue(field.name, value);
      }}
    />
  );
};

export default Input;
