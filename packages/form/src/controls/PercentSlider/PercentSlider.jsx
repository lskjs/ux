import React from 'react';
import PercentSliderBase from './PercentSliderBase';
import globalStyles from './PercentSlider.styles';

globalStyles();

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
