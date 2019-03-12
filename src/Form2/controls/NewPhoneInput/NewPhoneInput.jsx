import React from 'react';
import NewPhoneInner from './NewPhoneInner';

const NewPhoneInput = ({
  field, // { name, value, onChange, onBlur }
  form,
  defaultCountry,
  ...props
}) => {
  return (
    <NewPhoneInner
      {...field}
      {...props}
      onChange={(value) => {
        form.setFieldValue(field.name, value.replace(/\D+/g, ''));
      }}
    />
  );
};

export default NewPhoneInput;
