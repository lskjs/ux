import React from 'react';
import Cookies from 'js-cookie';

const tryJSONparse = (str, defaultValue = str) => {
  try {
    if (typeof str !== 'string') return str;
    return JSON.parse(str);
  } catch (err) {
    return defaultValue;
  }
};
export const getCookieJson = (cookieName) => tryJSONparse(Cookies.get(cookieName), null);
export const setCookieJson = (cookieName, value) => {
  const expires = new Date(Date.now());
  expires.setFullYear(expires.getFullYear() + 1);
  Cookies.set(cookieName, JSON.stringify(value), { expires });
};

const createCookieConsentForm = ({ cookieName = 'cookie-consent', view: View, initialValues = {} } = {}) => {
  return (props) => (
    <View
      initialValues={getCookieJson(cookieName) || initialValues}
      acceptAll={() => {
        setCookieJson(cookieName, { ...initialValues, updatedAt: Date.now() });
      }}
      rejectAll={() => {
        setCookieJson(cookieName, { ...initialValues, updatedAt: Date.now() });
      }}
      setCustom={(values) => {
        const state = getCookieJson(cookieName) || initialValues;
        Object.keys(initialValues).forEach((key) => {
          if (typeof values[key] === 'undefined') return;
          state[key] = values[key];
        });
        state.updatedAt = Date.now();
        setCookieJson(cookieName, state);
      }}
      {...props}
    />
  );
};

export default createCookieConsentForm;
