import React, { PureComponent } from 'react';
import { ALink, AIcon } from './AnimatedLink.styles';

class AnimatedLink extends PureComponent {
  render() {
    const {
      icon,
      children,
      paint,
      ...props
    } = this.props;
    return (
      <ALink paint={paint} {...props}>
        {children}
        <If condition={icon}>
          <AIcon type={icon} />
        </If>
      </ALink>
    );
  }
}

export default AnimatedLink;
