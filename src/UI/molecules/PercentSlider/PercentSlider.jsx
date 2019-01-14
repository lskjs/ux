import React, { PureComponent } from 'react';
import ASlider from 'antd/lib/slider';
import { Wrapper, Value, SliderWrapper } from './PercentSlider.styles';

class Slider extends PureComponent {
  render() {
    const {
      value,
      onChange,
      ...props
    } = this.props;
    return (
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
  }
}

export default Slider;
