import get from 'lodash.get';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Container, injectStyles } from './PhoneInput.style';
import PhoneInputBase from './react-phone-input-2';

injectStyles();

export const PhoneInput = ({ field, form, htmlId, imagePath, ...props }) => {
  const refInput = useRef();
  let width = get(refInput, 'current.numberInputRef.offsetWidth');
  if (!width) width = '100%';
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  useEffect(() => {
    forceUpdate();
  }, []);
  const hasError = field && field.name && !!(form || {}).errors[field.name];
  return (
    <Container imagePath={imagePath || '//lskjs.github.io/assets/images/flags.png'}>
      <PhoneInputBase
        ref={refInput}
        buttonStyle={{
          background: 'none',
          border: 'none',
        }}
        inputStyle={{
          width: '100%',
          border: !hasError ? 'solid 1px #e3e3e3' : 'solid 1px #EE1E31',
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
        onChange={(value) => {
          form.setFieldValue(get(field, 'name'), value.replace(/\D+/g, ''));
        }}
      />
    </Container>
  );
};

PhoneInput.propTypes = {
  field: PropTypes.objectOf(Object),
  form: PropTypes.objectOf(Object),
  htmlId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imagePath: PropTypes.string,
};

PhoneInput.defaultProps = {
  field: {},
  form: {},
  htmlId: '',
  imagePath: null,
};
export default PhoneInput;
