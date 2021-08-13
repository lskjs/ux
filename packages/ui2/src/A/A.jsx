/* eslint import/no-extraneous-dependencies: 0 */
import PropTypes from 'prop-types';
import React from 'react';

import Tag from './A.styles';

export const A = ({ bsStyle, className, href, to, ...props }) => (
  <Tag className={className} href={href || to} {...props} />
);

A.defaultProps = {
  className: null,
  href: null,
  to: null,
};
A.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
};

export default A;
