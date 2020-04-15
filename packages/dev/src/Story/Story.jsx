import React from 'react';
import Zebra from '../Zebra';
import Grill from '../Grill';

document.querySelector('body').style.margin = 0;
document.querySelector('body').style.padding = 0;

export default ({ children, grill, ...props }) => (
  <Zebra border={null} background="white" padding={40} colors={['#fcfcfc22', '#eeeeee22']} {...props}>
    {grill ? <Grill cols={grill}>{children}</Grill> : children}
  </Zebra>
);
