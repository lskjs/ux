import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';


@inject('t')
@observer
class NewPhoneInput extends Component {
  static propTypes = {
    value: PropTypes.string,
  }
  static defaultProps = {
    value: '',
  }
  render() {
    const { value } = this.props;
    return (
      <PhoneInput
        {...this.props}
        value={value}
        placeholder="Введите номер телефона"
        country="RU"
      />
    );
  }
}

export default NewPhoneInput;
