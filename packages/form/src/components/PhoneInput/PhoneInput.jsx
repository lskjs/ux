import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PhoneInputInner from './PhoneInputInner';

class PhoneInput extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
  }
  static defaultProps = {
    value: '',
  }
  render() {
    const { value } = this.props;
    return (
      <PhoneInputInner
        {...this.props}
        value={value}
      />
    );
  }
}

export default PhoneInput;
