import React from 'react';
import get from 'lodash/get';
import RadioCardsBase from '~/Uapp/components/RadioCards';
import FormGroup from '../FormGroup';

const RadioCards = ({
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
      <RadioCardsBase
        {...field}
        {...props}
        value={get(form.values, field.name)}
        validationState={form.errors[field.name] ? 'error' : null}
        onChange={(value) => {
          form.setFieldValue(field.name, value);
        }}
        options={props.options}
      />
    </FormGroup>
  );
};

export default RadioCards;
