import React from 'react';
import PropTypes from 'prop-types';
import ASlider from 'antd/lib/slider';
import { Wrapper, Value, SliderWrapper } from './PercentSlider.styles';

const Slider = ({ value, onChange, ...props }) => (
  <Wrapper>
    <Value>{value}%</Value>
    <SliderWrapper>
      <ASlider
        onChange={onChange}
        value={value}
        {...props}
      />
    </SliderWrapper>
  </Wrapper>
);

Slider.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  value: 0,
  onChange: null,
};

export default Slider;
