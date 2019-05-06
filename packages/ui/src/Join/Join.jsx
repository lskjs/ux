import React from 'react';
import PropTypes from 'prop-types';

const Join = ({ items, glue }) => (
  <React.Fragment>
    {items.reduce((prev, curr) => [prev, glue, curr])}
  </React.Fragment>
);

Join.propTypes = {
  items: PropTypes.instanceOf(PropTypes.array),
  glue: PropTypes.string,
};

Join.defaultProps = {
  items: [],
  glue: '',
};

export default Join;
