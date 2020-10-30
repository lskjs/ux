import React from 'react';
import PropTypes from 'prop-types';
import ReactFlag from 'react-flags';

const Flag = ({ country, code, pngSize, format, height, ...props }) => {
  let countryOrCode = code || country || 'gb';
  if (countryOrCode === 'uk' || countryOrCode === 'en') {
    countryOrCode = 'gb';
  }
  return (
    <ReactFlag
      name={countryOrCode.toUpperCase()}
      format={format}
      pngSize={pngSize}
      height={height}
      basePath="assets"
      {...props}
    />
  );
};

Flag.propTypes = {
  country: PropTypes.string,
  height: PropTypes.number,
  format: PropTypes.oneOf(['png', 'icns', 'ico', 'svg']),
  pngSize: PropTypes.oneOf([16, 24, 32, 48, 64]),
  code: PropTypes.string,
};
Flag.defaultProps = {
  country: 'gb',
  format: 'svg',
  height: 16,
  code: null,
  pngSize: 16,
};

export default Flag;
