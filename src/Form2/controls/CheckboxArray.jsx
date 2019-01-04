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
      onChange={(val) => {
        field.onChange({
          target: {
            name: field.name,
            value: val,
          },
        });
      }}
      selected={get(form.values, field.name) || []}
    />
  );
};

export default CheckboxesList;

