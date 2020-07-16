import React, { useEffect, useRef, useState, useCallback } from 'react';
import get from 'lodash/get';
import PhoneInput from './react-phone-input-2';
import { Container, injectStyles } from './PhoneInput.style';

injectStyles();

export default ({ field, form, ...props }) => {
  const { defaultCountry, defaultBehavior } = props;
  const refInput = useRef();
  let width = get(refInput, 'current.numberInputRef.offsetWidth');
  if (!width) width = '100%';
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  useEffect(() => {
    forceUpdate();
  }, []);
  let value;
  if (defaultBehavior) {
    value = field.value
  } else {
    value = (field.value || '').startsWith('+') ? field.value : `+${field.value}`;
  }
  const hasError = field && field.name && !!get(form, `errors.${field.name}`);
  return (
    <Container>
      <PhoneInput
        ref={refInput}
        buttonStyle={{
          background: 'none',
          border: 'none',
        }}
        inputStyle={{
          width: '100%',
          border: hasError ? '1px solid red' : '1px solid #e3e3e3',
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
        country={defaultBehavior ? defaultCountry : ''}
        {...field}
        {...props}
        value={value}
        onChange={(value) => {
          form.setFieldValue(field.name, defaultBehavior ? value : value.replace(/\D+/g, ''));
        }}
      />
    </Container>
  );
};
