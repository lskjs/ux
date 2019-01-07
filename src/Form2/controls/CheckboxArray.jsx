import React from 'react';
import get from 'lodash/get';
import CheckboxesListBase from '../../UI/molecules/CheckboxesList';

const CheckboxesList = ({
  field,
  form,
  ...props
}) => {
  return (
    <CheckboxesListBase
      {...field}
      {...props}
      data={props.options || []}
      onChange={(value) => {
        form.setFieldValue(field.name, value);
      }}
      selected={get(form.values, field.name) || []}
    />
  );
};

export default CheckboxesList;

