import React from 'react';
import get from 'lodash/get';
import PriceConverterBase from '../../UI/molecules/PriceConverter';
import FormGroup from '../FormGroup';

const PriceConverter = ({
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
      <PriceConverterBase
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

export default PriceConverter;

