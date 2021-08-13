/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

const DmiEyeClose = ({ size, width, height, ...props }) => {
  let svgWidth = width || size;
  let svgHeight = height || size;
  if (typeof svgWidth === 'number') svgWidth = `${svgWidth}px`;
  if (typeof svgHeight === 'number') svgHeight = `${svgHeight}px`;
  return (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 20 20"
      width={svgWidth}
      height={svgHeight}
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h20v20H0V0zm0 0h20v20H0V0zm0 0h20v20H0V0zm0 0h20v20H0V0z" />
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M10 5.833c2.3 0 4.167 1.867 4.167 4.167 0 .542-.109 1.05-.3 1.525l2.433 2.433c1.258-1.05 2.25-2.408 2.858-3.958-1.441-3.658-5-6.25-9.166-6.25-1.167 0-2.284.208-3.317.583l1.8 1.8c.475-.191.983-.3 1.525-.3zM1.667 3.558l1.9 1.9.383.384C2.567 6.917 1.483 8.35.833 10c1.442 3.658 5 6.25 9.167 6.25 1.292 0 2.525-.25 3.65-.7l.35.35 2.442 2.433 1.058-1.058L2.725 2.5 1.667 3.558zm4.608 4.609l1.292 1.291c-.042.175-.067.359-.067.542 0 1.383 1.117 2.5 2.5 2.5.183 0 .367-.025.542-.067l1.291 1.292c-.558.275-1.175.442-1.833.442-2.3 0-4.167-1.867-4.167-4.167 0-.658.167-1.275.442-1.833zm3.592-.65l2.625 2.625.016-.134c0-1.383-1.116-2.5-2.5-2.5l-.141.009z"
        />
      </g>
    </svg>
  );
};

DmiEyeClose.propTypes = {
  size: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DmiEyeClose.defaultProps = {
  size: null,
  width: 20,
  height: 20,
};
export default DmiEyeClose;
