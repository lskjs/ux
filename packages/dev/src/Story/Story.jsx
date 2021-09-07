/* eslint-disable react/display-name */
import React from 'react';

import Grill from '../Grill';
import Zebra from '../Zebra';

document.querySelector('body').style.margin = 0;
document.querySelector('body').style.padding = 0;

export default ({ children, grill, ...props }) => (
  <Zebra border={null} background="white" padding={40} colors={['#fcfcfc22', '#eeeeee22']} {...props}>
    {grill ? <Grill cols={grill}>{children}</Grill> : children}
  </Zebra>
);
