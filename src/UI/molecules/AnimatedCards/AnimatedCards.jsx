import React, { PureComponent } from 'react';
import If from 'react-if';
import Image from '../Image';
import { ACard } from './AnimatedCards.styles';

class AnimatedCards extends PureComponent {
  render() {
    const {
      icon,
      children,
      paint,
      ...props
    } = this.props;
    return (
      <ACard paint={paint} {...props}>
        <Image src="https://avatars.mds.yandex.net/get-pdb/750514/5798b2df-9998-4381-b8be-57aaf7b65e92/s375" />
        {children}
      </ACard>
    );
  }
}

export default AnimatedCards;
