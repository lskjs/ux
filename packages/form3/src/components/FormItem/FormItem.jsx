import PropTypes from 'prop-types';
import React from 'react';

import { Help, Label, Wrapper } from './FormItem.styles';

export const FormItem = ({ id, label, help, hasError, errorMessage, children }) => (
  <Wrapper id={id}>
    {label && <Label hasError={hasError}>{label}</Label>}
    {children}
    {(errorMessage || help) && <Help hasError={hasError}>{errorMessage || help}</Help>}
  </Wrapper>
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
