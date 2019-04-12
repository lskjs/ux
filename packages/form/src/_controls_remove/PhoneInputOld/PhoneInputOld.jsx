import React from 'react';
// import { Field, Form } from 'formik';
import PhoneInput from '../../components/PhoneInput';

const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form,
  ...props
}) => {
  return (
    <React.Fragment>
      <PhoneInput
        {...field}
        {...props}
        onChange={(value) => {
          form.setFieldValue(field.name, value);
        }}
      />
    </React.Fragment>
  );
};

export default CustomInputComponent;
