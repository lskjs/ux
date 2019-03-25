import React from 'react';
import PercentSliderBase from './PercentSliderBase';

const PercentSlider = ({
  field,
  form,
  ...props
}) => {
  return (
    <PercentSliderBase
      {...field}
      onChange={(value) => {
        form.setFieldValue(field.name, value);
      }}
      {...props}
    />
  );
};

export default PercentSlider;
