import React from 'react';
import get from 'lodash/get';
import SwitcherBase from '~/Uapp/components/Switcher';
import FormGroup from '../FormGroup';

const Switcher = ({
  field,
  form,
  ...props
}) => {
  return (
    <FormGroup
      field={field}
      form={form}
      {...props}
    >
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
    </FormGroup>
  );
};

export default Switcher;

