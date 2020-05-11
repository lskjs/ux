import React from 'react';
import PriceConverterBase from '../../components/PriceConverter';

const PriceConverter = ({
  field,
  form,
  ...props
}) => {
  return (
    <PriceConverterBase
      {...field}
      {...props}
      onChange={(value) => {
        form.setFieldValue(field.name, value);
      }}
      value={field.value}
    />
  );
};

export default PriceConverter;

