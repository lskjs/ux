import Button from '@lskjs/button';
import ButtonGroup from '@lskjs/button/ButtonGroup';
import Link from '@lskjs/link';
import socialColors from '@lskjs/utils/socialColors';
import get from 'lodash/get';
import React from 'react';

import socialIcons from './socials';

export const AuthSocials = ({ providers = [] }) => (
  <ButtonGroup padded>
    {providers.map(({ type, provider }) => {
      const Icon = get(socialIcons, `${type}.icon`) || get(socialIcons, `twitter.icon`);
      const colors = get(socialColors, type, socialColors.twitter);
      return (
        <Button
          componentClass={Link}
          href={`/api/auth/${provider}`}
          icon={<Icon />}
          key={provider}
          size="large"
          colors={colors}
        />
      );
      // return <Button key={provider} icon={<Icon />} colors={colors} />;
    })}
  </ButtonGroup>
);

export default AuthSocials;
