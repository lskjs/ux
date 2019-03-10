import React from 'react';
// import { Field, Form } from 'formik';
import NewPhoneInner from './NewPhoneInner';


const NewPhoneInput = ({
  field, // { name, value, onChange, onBlur }
  form,
  defaultCountry,
  ...props
}) => {
  return (
    <React.Fragment>
      <NewPhoneInner
        {...field}
        {...props}
        onChange={(value) => {
          form.setFieldValue(field.name, value.replace(/\D+/g, ''));
        }}
      />
      {/* <input type="text" {...field} {...props} /> */}
      {/* {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>} */}
    </React.Fragment>
  );
};

export default NewPhoneInput;
