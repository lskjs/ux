import React, { useState } from 'react';
import Cookies from 'js-cookie';
import mapValues from 'lodash/mapValues';

const tryJSONparse = (str, defaultValue = str) => {
  try {
    if (typeof str !== 'string') return str;
    return JSON.parse(str);
  } catch (err) {
    return defaultValue;
  }
};
export const getCookieJson = (cookieName) => tryJSONparse(Cookies.get(cookieName), null);
export const setCookieJson = (cookieName, value, options = {}) => {
  const expires = new Date(Date.now());
  expires.setFullYear(expires.getFullYear() + 1);
  Cookies.set(cookieName, JSON.stringify(value), { expires, ...options });
};

const createCookieConsentForm = ({
  cookieName = 'cookie-consent',
  options = {},
  view: View,
  initialValues = {},
  onChange,
  onInit,
} = {}) => {
  return ({ onInit: onInit2, onChange: onChange2, ...props }) => {
    const { name = cookieName, ...cookieOptions } = options;
    const [cookieValues, setValues] = useState(getCookieJson(name) || initialValues);
    if (onInit) onInit(cookieValues);
    if (onInit2) onInit2(cookieValues);
    const setCookie = (state) => {
      setCookieJson(name, state, cookieOptions);
      setValues(state);
      if (onChange) onChange(state);
      if (onChange2) onChange2(state);
    };
    return (
      <View
        initialValues={cookieValues}
        acceptAll={() => {
          setCookie({ ...mapValues(initialValues, () => true), updatedAt: Date.now() });
        }}
        rejectAll={() => {
          setCookie({ ...mapValues(initialValues, () => false), updatedAt: Date.now() });
        }}
        setCustom={(values) => {
          const state = { ...cookieValues };
          Object.keys(initialValues).forEach((key) => {
            if (typeof values[key] === 'undefined') return;
            state[key] = values[key];
          });
          state.updatedAt = Date.now();
          setCookie(state);
        }}
        {...props}
      />
    );
  };
};

export default createCookieConsentForm;
