import BaseSlide from '@lskjs/slide/Slide';
import React from 'react';

const Slide = ({ children, ...props }) => (
  <BaseSlide center full overlay="rgba(0,0,0,0.85)" {...props}>
    <div>{children}</div>
  </BaseSlide>
);

export default Slide;
