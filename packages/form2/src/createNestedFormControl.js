import React2 from 'react';

import DEBUG from './createForm/_debug';

const createNestedFormControl = (Component, React = React2) => ({ children, form, field, ...props }) => {
  const { value } = field;
  if (DEBUG) console.log('createNestedFormControl', { props }); // eslint-disable-line no-console
  return React.createElement(
    Component,
    {
      ...props,
      initialValues: value,
      onChange: (values) => {
        form.setFieldValue(field.name, values);
      },
      onSubmit: (values) => {
        form.setFieldValue(field.name, values);
      },
    },
    children,
  );
};
export default createNestedFormControl;
