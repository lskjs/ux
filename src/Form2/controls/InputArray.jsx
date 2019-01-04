import React from 'react';
import get from 'lodash/get';
import InputArrayBase from '../../UI/molecules/InputArray';

const InputArray = ({
  field,
  form,
  onError,
  ...props
}) => {
  return (
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
  );
};

export default InputArray;

