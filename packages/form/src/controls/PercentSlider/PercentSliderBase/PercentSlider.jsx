import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ASlider from 'antd/lib/slider';
import debounce from 'lodash/debounce';
import { Wrapper, Value, SliderWrapper } from './PercentSlider.styles';

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
  console.log(props);
  return (
    <Wrapper id={htmlId} name={name}>
      <Value>{value}%</Value>
      <SliderWrapper>
        <ASlider
          {...props}
          onChange={handleLocalChange}
          value={value}
        />
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
