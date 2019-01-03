import React from 'react';
import ThemeInjector from '../../../ThemeInjector';
import ProfileCardV1 from './ProfileCardSmall';

import '../../../styles/lib/antd.g.css';

module.exports = ({ storiesOf }) => (
  storiesOf('ui/ProfileCardSmall', module)
    .add('Default', () => (
      <ThemeInjector>
        <ProfileCardV1 img="https://picsum.photos/200" name="Jason Bourne" info="Engineer" />
      </ThemeInjector>
    ))
);
