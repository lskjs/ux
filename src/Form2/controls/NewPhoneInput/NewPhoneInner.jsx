import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import { inject, observer } from 'mobx-react';

const Container = styled.div`

  .flag-dropdown{
    border: 1px solid #1890ff;
    background: none;
  }
  .form-control:focus{
    font-size: 1.1em;
  }
`;

@inject('t')
@observer
class NewPhoneInner extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    defaultCountry: PropTypes.string,
  };
  static defaultProps = {
    value: '',
    defaultCountry: 'ru',
  };
  render() {
    const { value, ...props } = this.props;
    const prefixedValue = (value || '').startsWith('+') ? value : `+${value}`;
    return (
      <Container>
        <PhoneInput value={prefixedValue}{...props} />
      </Container>
    );
  }
}

export default NewPhoneInner;
