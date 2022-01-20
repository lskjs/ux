import React from 'react';

import globalStyles from './PercentSlider.styles';
import PercentSliderBase from './PercentSliderBase';

globalStyles();

const PercentSlider = ({ field, form, ...props }) => (
  <PercentSliderBase
    {...field}
    onChange={(value) => {
      form.setFieldValue(field.name, value);
    }}
    {...props}
  />
);

export default PercentSlider;
