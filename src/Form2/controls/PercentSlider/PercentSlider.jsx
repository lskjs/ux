import React from 'react';
import PercentSliderBase from '../../../UI/molecules/PercentSlider';

const PercentSlider = ({
  field,
  form,
  ...props
}) => {
  return (
    <PercentSliderBase
      {...field}
      {...props}
      onChange={(value) => {
        form.setFieldValue(field.name, value);
      }}
    />
  );
};

export default PercentSlider;
