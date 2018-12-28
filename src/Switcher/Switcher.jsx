import React, { PureComponent } from 'react';
import bind from 'core-decorators/lib/autobind';
import PropTypes from 'prop-types';
import {
  Label,
  Handler,
  Block,
  Wrap,
} from './Switcher.styles';

class Switcher extends PureComponent {
  static propTypes = {
    value: PropTypes.bool,
    onChange: PropTypes.func,
  }
  static defaultProps = {
    value: false,
    onChange: null,
  }
  @bind handleChange() {
    const { onChange, value } = this.props;
    if (onChange) onChange(!value);
  }
  render() {
    const {
      value, title, checkedTitle, reversed, styleSwitcher, disabled,
    } = this.props;
    // let text = t(`common.switch.${value ? 'on' : 'off'}`);
    let text = null;
    if (title || checkedTitle) {
      text = (value && checkedTitle) ? checkedTitle : title;
    }
    return (
      <Wrap disabled={disabled}>
        {!reversed &&
        <div>
          {text && <Label>{text}</Label>}
        </div>
        }
        <Block
          type="button"
          checked={value}
          onClick={this.handleChange}
          style={styleSwitcher}
          disabled={disabled}
        >
          <Handler />
        </Block>
        {reversed &&
        <div>
          {text && <Label>{text}</Label>}
        </div>
        }
      </Wrap>
    );
  }
}

export default Switcher;
