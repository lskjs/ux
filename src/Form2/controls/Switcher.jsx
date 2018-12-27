import React from 'react';
import get from 'lodash/get';
import SwitcherBase from '../../Switcher';

const Switcher = ({
  field,
  form,
  ...props
}) => {
  return (
    <SwitcherBase
      {...field}
      {...props}
      onChange={(val) => {
          field.onChange({
            target: {
              name: field.name,
              value: val,
            },
          });
        }}
      value={get(form.values, field.name)}
    />
  );
};

export default Switcher;

