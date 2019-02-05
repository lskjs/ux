import React, { PureComponent } from 'react';
import Close from 'react-icons2/mdi/close';

import Button from '../Button';
import closeButtonStyle from '../UI/molecules/Modal/Modal.styles';

export default props => (
  <Button
    type="button"
    paint="primary"
    icon={<Close />}
    className={closeButtonStyle}
    {...props}
  />
);
