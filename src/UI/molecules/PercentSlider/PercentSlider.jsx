import React, { Component } from 'react';
import ASlider from 'antd/lib/slider';
import cx from 'classnames';
import { Value, SliderWrapper } from './PercentSlider.styles';

class Slider extends Component {
  state = {
    inputValue: 0,
  }

  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  }
  render() {
    const { inputValue } = this.state;
    const { inverseTrack, styleWrapper = {}, ...props } = this.props;
    console.log(styleWrapper);
    return (
      <div
        className={cx({
          'buzz-slider': true,
          'buzz-slider-inverse-track': inverseTrack,
        })}
        style={{ display: 'flex' }}
      >
        <Value>{this.state.inputValue}%</Value>
        <SliderWrapper>
          <ASlider
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
            {...props}
          />
        </SliderWrapper>
      </div>
    );
  }
}

export default Slider;
