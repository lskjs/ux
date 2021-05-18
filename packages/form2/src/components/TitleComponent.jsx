import getTheme from '@lskjs/theme/getTheme';
import PropTypes from 'prop-types';
import React from 'react';

export const TitleComponent = ({ title, error, info, isRequired, infoLeft }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: infoLeft ? 'flex-start' : 'space-between',
    }}
  >
    <div
      style={{
        color: getTheme({}, error ? 'colors.danger' : 'colors.main'),
        marginRight: infoLeft ? '4px' : 'unset',
      }}
    >
      {title}
      {isRequired && (
        <span
          style={{
            color: getTheme({}, 'form.requiredColor', getTheme({}, 'colors.danger')),
            paddingLeft: 4,
          }}
        >
          *
        </span>
      )}
    </div>
    {!!info && (
      <div
        style={{
          display: 'flex',
        }}
      >
        {info}
      </div>
    )}
  </div>
);

TitleComponent.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.objectOf(PropTypes.any),
  isRequired: PropTypes.bool,
  infoLeft: PropTypes.bool,
};

TitleComponent.defaultProps = {
  title: undefined,
  info: undefined,
  error: undefined,
  isRequired: false,
  infoLeft: false,
};

export default TitleComponent;
