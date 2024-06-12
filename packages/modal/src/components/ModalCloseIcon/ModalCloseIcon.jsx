/** @jsxRuntime classic */
/** @jsx jsx */
/* eslint import/no-extraneous-dependencies: 0 */
import { Global, jsx } from '@emotion/core';
import Button from '@lskjs/button';
import React from 'react';
import Close from 'react-icons2/mdi/close';

import { closeButtonStyle } from '../../Modal2.styles';

export default (props) => (
  <>
    <Global
      styles={{
        '.closeButton': closeButtonStyle,
      }}
    />
    <Button
      type="button"
      paint={props.whiteTheme ? 'transparent' : 'transparentDark'}
      icon={<Close />}
      className="closeButton"
      {...props}
    />
  </>
);
