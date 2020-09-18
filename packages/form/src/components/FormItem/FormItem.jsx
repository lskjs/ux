import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './FormItem.styles';

const FormItem = ({ id, label, help, hasError, errorMessage, children }) => (
  <Styles.Wrapper id={id}>
    {label && <Styles.Label hasError={hasError}>{label}</Styles.Label>}
    {children}
    {(errorMessage || help) && <Styles.Help hasError={hasError}>{errorMessage || help}</Styles.Help>}
  </Styles.Wrapper>
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
