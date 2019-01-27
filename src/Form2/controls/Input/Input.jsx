import React from 'react';
import InputBase from '../../../Input';

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
      regex={props.regex}
      // leftIcon={<Icon color="#0088cc" size={24} />}
      onChange={(value) => {
        form.setFieldValue(field.name, value);
      }}
    />
  );
};

export default Input;
