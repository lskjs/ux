import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { inject } from 'mobx-react';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';

const ReCaptchaV3 = ({ uapp, field, form, ...props }) => {
  const hasError = field && field.name && !!get(form, `errors.${field.name}`);
  const sitekey = get(uapp, 'config.capcha.sitekey');
  if (!sitekey) return '!sitekey';
  return (
    <>
      <GoogleReCaptchaProvider language="en" useRecaptchaNet="true" reCaptchaKey={sitekey}>
        {field.value ? 'OK' : ''}
        <GoogleReCaptcha
          {...field}
          {...props}
          style={{ border: hasError ? '1px solid red' : '' }}
          onVerify={(token) => {
            form.setFieldValue(field.name, token);
          }}
        />
      </GoogleReCaptchaProvider>
    </>
  );
};

ReCaptchaV3.propTypes = {
  uapp: PropTypes.objectOf(Object),
  field: PropTypes.objectOf(Object),
  form: PropTypes.objectOf(Object),
};

ReCaptchaV3.defaultProps = {
  uapp: null,
  field: null,
  form: null,
};

export default inject('uapp')(ReCaptchaV3);
