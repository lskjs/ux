// import React2 from 'react';

const createNestedFormControl = (Component, React) => (props) => {
  const { form, field, ...otherProps } = props;
  const { value } = field;
  return (
    <Component  //eslint-disable-line
      {...otherProps}
      initialValues={value}
      onChange={(values) => {
        form.setFieldValue(field.name, values);
      }}
    />
  );
};
export default createNestedFormControl;
