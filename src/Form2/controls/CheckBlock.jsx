import React from 'react';
import get from 'lodash/get';
import ExtendedCheckblock from '../../UI/molecules/ExtendedCheckblock';

const CheckBlock = ({
  field,
  form,
  ...props
}) => {
  const props2 = {
    value: get(form.values, field.name),
    validationState: form.errors[field.name] ? 'error' : null,
    onChange: (val) => {
      field.onChange({
        target: {
          name: field.name,
          value: val,
        },
      });
    },
    label: props.title || props.name,
    info: props.info,
  };

  return (
    <ExtendedCheckblock
      {...field}
      {...props}
      {...props2}
      children={props.children}  //eslint-disable-line
    />
  );
};

export default CheckBlock;

