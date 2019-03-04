import React from 'react';
// import { Field, Form } from 'formik';
import NewPhoneInput from '../../../UI/molecules/NewPhoneInput/NewPhoneInput';

const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form,
  ...props
}) => {
  return (
    <React.Fragment>
      <NewPhoneInput
        {...field}
        {...props}
        onChange={(value) => {
          form.setFieldValue(field.name, value);
        }}
      />
      {/* <input type="text" {...field} {...props} /> */}
      {/* {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>} */}
    </React.Fragment>
  );
};

export default CustomInputComponent;
