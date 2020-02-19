import React from 'react';
import If from 'react-if';
import { ALink, AIcon } from './AnimatedLink.styles';

const AnimatedLink = ({ icon, children, paint, ...props }) => (
  <ALink paint={paint} {...props}>
    {children}
    <If condition={!!icon}>
      <AIcon type={icon} />
    </If>
  </ALink>
);

export default AnimatedLink;
