import filterProps from '@lskjs/utils/filterProps'; // TODO: подумать
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import getBlock from './BaseInput.styles';
import { Count, InputBox, LeftWrapper, RightWrapper } from './InputStyle.styles';

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.Block = getBlock(props.componentClass);
    let debounceValue = 100;
    if (typeof props.debounce === 'number') {
      debounceValue = props.debounce;
    }
    this.onChange = debounce((...args) => {
      if (props.onChange) {
        props.onChange(...args);
      }
    }, debounceValue);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.componentClass !== this.props.componentClass) {
      this.Block = getBlock(nextProps.componentClass);
    }
    if (nextProps.value !== this.state.value) {
      let { value } = nextProps;
      if (value === null || value === undefined) value = '';
      this.setState({ value });
    }
  }

  handleChange(e) {
    const { regex } = this.props;
    let value = e;
    if (!(typeof value === 'number' || typeof value === 'string') && value) {
      value = value.target ? value.target.value : value;
    }
    const { displayRate } = this.props;
    if (typeof displayRate === 'number') {
      value /= displayRate;
    }
    if (regex) {
      [value] = value.match(regex);
    }
    this.setState({ value });
    this.onChange(value);
  }

  render() {
    const {
      className,
      block,
      validationState,
      componentClass,
      disabled,
      displayRate,
      innerRef,
      leftIcon,
      rightIcon,
      maxLength,
      showLimit,
      ...otherProps
    } = this.props;
    const { value } = this.state;
    const { Block } = this;
    return (
      <InputBox>
        {!!leftIcon && <LeftWrapper>{leftIcon}</LeftWrapper>}
        <Block
          iconLeft={leftIcon}
          iconRight={rightIcon}
          ref={innerRef}
          validationState={validationState}
          block={block}
          disabled={disabled}
          className={className}
          maxLength={maxLength}
          {...filterProps(otherProps, Block)}
          value={typeof displayRate === 'number' ? value * displayRate : value}
          onChange={this.handleChange.bind(this)}
        />
        {!!rightIcon && <RightWrapper>{rightIcon}</RightWrapper>}
        {!!(maxLength && showLimit) && <Count>{`${`${value || ''}`.length}/${maxLength}`}</Count>}
      </InputBox>
    );
  }
}

Input.propTypes = {
  displayRate: PropTypes.number,
  validationState: PropTypes.oneOf(['success', 'warning', 'error']),
  componentClass: PropTypes.any,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  styleName: PropTypes.string,
  leftIcon: PropTypes.any,
  rightIcon: PropTypes.any,
  innerRef: PropTypes.any,
  className: PropTypes.string,
  regex: PropTypes.any,
  maxLength: PropTypes.number,
  showLimit: PropTypes.bool,
};
Input.defaultProps = {
  validationState: null,
  componentClass: 'input',
  block: false,
  disabled: false,
  styleName: null,
  displayRate: null,
  leftIcon: null,
  rightIcon: null,
  innerRef: null,
  className: null,
  regex: null,
  maxLength: null,
  showLimit: true,
};

export default Input;
