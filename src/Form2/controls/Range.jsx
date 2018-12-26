import React from 'react';
import get from 'lodash/get';
import debounce from 'lodash.debounce';
import RangeBase from '~/Uapp/components/RangeGroup';
import FormGroup from '../FormGroup';

const Range = ({
  field,
  form,
  ...props
}) => {
  let debounceFunction;
  const handleChange = (value) => {
    return () => {
      form.setFieldValue(field.name, value);
    };
  };
  return (
    <FormGroup
      field={field}
      form={form}
      {...props}
    >
      <RangeBase
        {...field}
        {...props}
        value={get(form.values, field.name)}
        validationState={form.errors[field.name] ? 'error' : null}
        onChange={(value) => {
          if (debounceFunction && debounceFunction.cancel) {
            debounceFunction.cancel();
          }
          debounceFunction = debounce(handleChange(value), 3000);
          debounceFunction();
        }}
      />
    </FormGroup>
  );
};

export default Range;
