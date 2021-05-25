import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import RcSlider from 'rc-slider';
import React, { useEffect, useRef, useState } from 'react';

import { SliderWrapper, Value, Wrapper } from './PercentSlider.styles';

const Slider = ({ onChange, value: propValue, htmlId, name, onBlur, ...props }) => {
  const [value, setValue] = useState(propValue);
  const refPrevValue = useRef();

  useEffect(() => {
    if (refPrevValue.current !== propValue) {
      refPrevValue.current = propValue;
      setValue(propValue);
    }
  }, [propValue]);

  const handleRemoteChange = debounce((_value) => {
    if (onChange) onChange(_value);
  }, 150);

  const handleLocalChange = (_value) => {
    setValue(_value);
    handleRemoteChange(_value);
  };
  return (
    <Wrapper id={htmlId} name={name}>
      <Value>{value}%</Value>
      <SliderWrapper>
        <RcSlider {...props} min={0} max={100} value={value} step={1} onChange={handleLocalChange} />
      </SliderWrapper>
    </Wrapper>
  );
};

Slider.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  value: 0,
  onChange: null,
};

export default Slider;
