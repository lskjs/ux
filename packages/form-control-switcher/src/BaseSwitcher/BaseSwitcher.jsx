import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { Block, Handler, Label, LabelWrapper, Wrap } from './BaseSwitcher.styles';

export class BaseSwitcher extends PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

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
        {!!left && (
          <LabelWrapper left checked={!value}>
            {left}
          </LabelWrapper>
        )}

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
        {!!right && (
          <LabelWrapper right checked={value}>
            {right}
          </LabelWrapper>
        )}
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
