import React from 'react';
import PropTypes from 'prop-types';
import LinkContext from './Link.context';

const LinkProvider = ({ children, onClick }) => (
  <LinkContext.Provider value={{ onClick }}>
    <>{children}</>
  </LinkContext.Provider>
);

LinkProvider.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default LinkProvider;
