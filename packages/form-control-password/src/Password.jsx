import T from '@lskjs/t';
import getPasswordEntropy from '@lskjs/utils/getPasswordEntropy';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import BaseInput from './components/BaseInput';
import Info from './components/Info';
import PassType from './components/PassType';
import Eye from './icons/eye';
import EyeClose from './icons/eye-close';

export const Password = ({ field, form, validationInfo, ...props }) => {
  const [type, setType] = useState('password');
  const password = field.value || '';
  const upperCaseRegExp = new RegExp(/[A-Z]+/);
  const specialCharRegExp = new RegExp(/[$&+,:;=?@#|'<>.^*()%!-]/);
  let passTypeKey = 'lskFormPassword.validationType_1';
  let color = '#fa6400';
  if (getPasswordEntropy(password) >= 40) {
    passTypeKey = 'lskFormPassword.validationType_3';
    color = '#78d900';
  } else if (getPasswordEntropy(password) >= 20 && getPasswordEntropy(password) < 40) {
    passTypeKey = 'lskFormPassword.validationType_2';
    color = '#f7b500';
  } else if (getPasswordEntropy(password) < 20) {
    passTypeKey = 'lskFormPassword.validationType_1';
    color = '#fa6400';
  }
  const hasError = field && field.name && !!(form || {}).errors[field.name];
  const errorStyle = { border: '1px solid red' };
  return (
    <div style={{ position: 'relative' }}>
      {!!password && validationInfo && (
        <PassType color={color} lineHeight={1.7} letterSpacing="normal">
          <T name={passTypeKey} />
        </PassType>
      )}
      <BaseInput
        {...field}
        value={field.value || ''}
        rightIcon={
          validationInfo &&
          (type === 'password' ? (
            <Eye size={18} onClick={() => setType('text')} color="#cdcdcd" />
          ) : (
            <EyeClose size={20} onClick={() => setType('password')} color="#cdcdcd" />
          ))
        }
        debounce={0}
        {...props}
        type={type}
        style={hasError ? errorStyle : {}}
        onChange={(value) => {
          form.setFieldValue(field.name, value);
        }}
      />
      {!!password && validationInfo && (
        <Info color="#9b9b9b" lineHeight={1.27} letterSpacing="normal" style={{ marginTop: 7 }}>
          <Info
            color={password && password.length >= 8 ? '#7070ff' : '#9b9b9b'}
            lineHeight={1.27}
            letterSpacing="normal"
            as="span"
          >
            <T name="lskFormPassword.validation_1" />
          </Info>
          <Info
            color={password && password.match(upperCaseRegExp) ? '#7070ff' : '#9b9b9b'}
            lineHeight={1.27}
            letterSpacing="normal"
            as="span"
          >
            <T name="lskFormPassword.validation_2" />
          </Info>
          <Info
            color={password && password.match(specialCharRegExp) ? '#7070ff' : '#9b9b9b'}
            lineHeight={1.27}
            letterSpacing="normal"
            as="span"
          >
            <T name="lskFormPassword.validation_3" />
          </Info>
        </Info>
      )}
    </div>
  );
};

Password.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  field: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
  validationInfo: PropTypes.bool,
};

Password.defaultProps = {
  field: undefined,
  validationInfo: false,
};

export default Password;
