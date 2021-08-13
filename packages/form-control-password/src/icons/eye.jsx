/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

const DmiEye = ({ size, width, height, ...props }) => {
  let svgWidth = width || size;
  let svgHeight = height || size;
  if (typeof svgWidth === 'number') svgWidth = `${svgWidth}px`;
  if (typeof svgHeight === 'number') svgHeight = `${svgHeight}px`;
  return (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 20 16"
      width={svgWidth}
      height={svgHeight}
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0-2h20v20H0z" />
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M10 .222C5.455.222 1.573 3.447 0 8c1.573 4.553 5.455 7.778 10 7.778S18.427 12.553 20 8C18.427 3.447 14.545.222 10 .222zM10 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8C8.34 5 7 6.34 7 8s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
        />
      </g>
    </svg>
  );
};

DmiEye.propTypes = {
  size: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DmiEye.defaultProps = {
  size: null,
  width: 20,
  height: 16,
};

export default DmiEye;
