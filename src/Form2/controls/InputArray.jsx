import React from 'react';
import get from 'lodash/get';
import InputArrayBase from '~/lsk/Form/InputArray';
import FormGroup from '../FormGroup';

const InputArray = ({
  field,
  form,
  onError,
  ...props
}) => {
  return (
    <FormGroup
      field={field}
      form={form}
      {...props}
    >
      <InputArrayBase
        {...field}
        {...props}
        validationState={form.errors[field.name] ? 'error' : null}
        onChange={(val) => {
          field.onChange({
            target: {
              name: field.name,
              value: val,
            },
          });
        }}
        onError={() => onError?.(form.errors[field.name])} // this.globalError
        value={get(form.values, field.name)}
      />
    </FormGroup>
  );
};

export default InputArray;

