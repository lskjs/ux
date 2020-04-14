import React from 'react';
import PropTypes from 'prop-types';
import ReactWorldFlag from 'react-world-flags';

const Flag = ({ country, code, height, ...props }) => {
  let countryOrCode = code || country || 'gb';
  if (countryOrCode === 'uk' || countryOrCode === 'en') {
    countryOrCode = 'gb';
  }
  return <ReactWorldFlag code={countryOrCode.toUpperCase()} height={height} {...props} />;
};

Flag.propTypes = {
  country: PropTypes.string,
  height: PropTypes.number,
};
Flag.defaultProps = {
  country: 'gb',
  height: 16,
};

export default Flag;
