import getTheme from '@lskjs/theme/getTheme';
import React from 'react';

import { FormItem } from './components/FormItem';
import getControlHtmlId from './createForm/getControlHtmlId';
import FormError from './FormError';

const noticeStyle = {
  marginBottom: 8,
  borderRadius: 3,
  backgroundColor: '#f0f0f0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 13,
  fontFamily: getTheme({}, 'fontFamily'),
  fontSize: 11,
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 1.83,
  letterSpacing: -0.1,
  textAlign: 'center',
  color: '#111111',
};

const FormSubmitError = ({ errors }) => (
  <FormItem hasError={!!errors}>
    {!!errors.onSubmit && (
      <div style={noticeStyle}>
        <FormError id={getControlHtmlId('onSubmit')}>{errors.onSubmit}</FormError>
      </div>
    )}
  </FormItem>
);

export default FormSubmitError;
