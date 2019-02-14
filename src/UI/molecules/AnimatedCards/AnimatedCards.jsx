import React, { PureComponent } from 'react';
import If from 'react-if';
import Image from '../Image';
import { ACard, Info, InfoMask, InfoContent, InfoInner } from './AnimatedCards.styles';

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
        <Image
          width="100%"
          src="https://avatars.mds.yandex.net/get-pdb/750514/5798b2df-9998-4381-b8be-57aaf7b65e92/s375"
        />
        <Info>
          <InfoMask />
          <InfoContent>
            <InfoInner>
              {children}
            </InfoInner>
          </InfoContent>
        </Info>
      </ACard>
    );
  }
}

export default AnimatedCards;
