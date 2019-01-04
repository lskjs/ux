import React from 'react';
import get from 'lodash/get';
import PriceConverterBase from '../../UI/molecules/PriceConverter';

const PriceConverter = ({
  field,
  form,
  ...props
}) => {
  return (
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
  );
};

export default PriceConverter;

