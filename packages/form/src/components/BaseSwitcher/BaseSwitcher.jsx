import React, { PureComponent } from 'react';
import If from 'react-if';
import autobind from '@lskjs/autobind';
import PropTypes from 'prop-types';
import { Label, Handler, Block, Wrap, LabelWrapper } from './BaseSwitcher.styles';

class BaseSwitcher extends PureComponent {
  @autobind
  handleChange() {
    const { onChange, value } = this.props;
    if (onChange) onChange(!value);
  }
  render() {
    const { value, label, checkedTitle, reversed, styleSwitcher, disabled, validationState, left, right } = this.props;
    // let text = t(`common.switch.${value ? 'on' : 'off'}`);
    let text = null;
    if (label || checkedTitle) {
      text = value && checkedTitle ? checkedTitle : label;
    }
    const double = left || right;
    return (
      <Wrap disabled={disabled}>
        <If condition={!!left}>
          <LabelWrapper left checked={!value}>
            {left}
          </LabelWrapper>
        </If>
        {!reversed && !double && <div>{text && <Label>{text}</Label>}</div>}
        <Block
          type="button"
          checked={value}
          onClick={this.handleChange}
          style={styleSwitcher}
          disabled={disabled}
          validationState={validationState}
        >
          <Handler />
        </Block>
        {reversed && !double && <div>{text && <Label>{text}</Label>}</div>}
        <If condition={!!right}>
          <LabelWrapper right checked={value}>
            {right}
          </LabelWrapper>
        </If>
      </Wrap>
    );
  }
}

BaseSwitcher.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  validationState: PropTypes.oneOf(['success', 'warning', 'error']),
  // eslint-disable-next-line react/forbid-prop-types
  left: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  right: PropTypes.any,
};
BaseSwitcher.defaultProps = {
  value: false,
  onChange: null,
  validationState: null,
  left: null,
  right: null,
};

export default BaseSwitcher;
