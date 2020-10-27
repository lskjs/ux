import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { inject } from 'mobx-react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptchaV2 = ({ uapp, field, form, ...props }) => {
  const hasError = field && field.name && !!get(form.errors, field.name);
  const sitekey = get(uapp, 'config.capcha.sitekey');
  if (!sitekey) return '!sitekey';
  return (
    <>
      <ReCAPTCHA
        sitekey={sitekey}
        {...field}
        {...props}
        style={{ border: hasError ? '1px solid red' : '' }}
        onChange={(value) => {
          form.setFieldValue(field.name, value);
        }}
      />
    </>
  );
};

ReCaptchaV2.propTypes = {
  uapp: PropTypes.objectOf(Object),
  field: PropTypes.objectOf(Object),
  form: PropTypes.objectOf(Object),
};

ReCaptchaV2.defaultProps = {
  uapp: null,
  field: null,
  form: null,
};

export default inject('uapp')(ReCaptchaV2);
