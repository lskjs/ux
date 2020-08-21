import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import PhoneInputBase from './react-phone-input-2';
import { Container, injectStyles } from './PhoneInput.style';

injectStyles();

const PhoneInput = ({ field, form, ...props }) => {
  const refInput = useRef();
  let width = get(refInput, 'current.numberInputRef.offsetWidth');
  if (!width) width = '100%';
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  useEffect(() => {
    forceUpdate();
  }, []);
  const fieldError = get(form, `errors.${get(field, 'name')}`, false);
  return (
    <Container>
      <PhoneInputBase
        ref={refInput}
        buttonStyle={{
          background: 'none',
          border: 'none',
        }}
        inputStyle={{
          width: '100%',
          border: fieldError ? 'solid 1px #EE1E31' : 'solid 1px #e3e3e3',
          fontSize: '13px',
          // paddingTop: '23px',
          // paddingBottom: '23px',
          color: '#4a4a4a',
          borderRadius: '3px',
          // background: 'none',
        }}
        dropdownStyle={{
          fontSize: '13px',
          width,
        }}
        defaultCountry="ru"
        {...field}
        {...props}
        value={(get(field, 'value') || '').startsWith('+') ? get(field, 'value') : `+${get(field, 'value')}`}
        onChange={value => {
          form.setFieldValue(get(field, 'name'), value.replace(/\D+/g, ''));
        }}
      />
    </Container>
  );
};

PhoneInput.propTypes = {
  field: PropTypes.objectOf(Object),
  form: PropTypes.objectOf(Object),
};

PhoneInput.defaultProps = {
  field: {},
  form: {},
};
export default PhoneInput;
