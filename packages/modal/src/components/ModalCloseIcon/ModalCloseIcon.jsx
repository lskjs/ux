/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import Close from 'react-icons2/mdi/close';

import Button from '@lskjs/button';
import { closeButtonStyle } from '../../Modal2.styles';

export default props => (
  <Button
    type="button"
    paint="transparent"
    icon={<Close />}
    className={closeButtonStyle}
    {...props}
  />
);
