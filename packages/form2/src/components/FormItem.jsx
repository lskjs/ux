import getTheme from '@lskjs/theme/getTheme';
import PropTypes from 'prop-types';
import React from 'react';

export const FormItem = ({ id, label, help, hasError, errorMessage, children }) => (
  <div
    style={{
      fontSize: 14,
      fontVariant: 'tabular-nums',
      color: getTheme({}, 'colors.main'),
      boxSizing: 'border-box',
      margin: '0 0 24px',
      padding: 0,
      listStyle: 'none',
      display: 'block',
    }}
    id={id}
  >
    {label && (
      <div
        style={{
          display: 'block',
          textAlign: 'left',
          lineHeight: 1.71429,
          fontSize: 12,
          fontWeight: 500,
          paddingBottom: 2,
          color: getTheme({}, hasError ? 'colors.danger' : 'colors.main'),
        }}
      >
        {label}
      </div>
    )}
    {children}
    {(errorMessage || help) && (
      <div
        style={{
          lineHeight: 1.5,
          fontSize: 12,
          paddingTop: 4,
          color: getTheme({}, hasError ? 'colors.danger' : 'colors.main'),
        }}
      >
        {errorMessage || help}
      </div>
    )}
  </div>
);

FormItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.node]),
  help: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.node]),
  hasError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.node]),
};

FormItem.defaultProps = {
  label: undefined,
  help: undefined,
  errorMessage: undefined,
  children: undefined,
};

export default FormItem;
