import React from 'react';
import Zebra from '../Zebra';

export default ({ children }) => (
  <Zebra border={null} background="white" padding={40} colors={['#fcfcfc22', '#eeeeee22']}>
    {children}
  </Zebra>
);
