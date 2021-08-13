import PropTypes from 'prop-types';
import React from 'react';

import CloseIconTag from './CloseIconTag';
import { Base, Close } from './DefaultTag.styles';

const DefaultTag = ({ onClose, children }) => (
  <Base>
    {children}
    <Close onClick={() => onClose && onClose()}>
      <CloseIconTag />
    </Close>
  </Base>
);

DefaultTag.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

DefaultTag.defaultProps = {
  children: null,
  onClose: null,
};

export default DefaultTag;
