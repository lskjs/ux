import React from 'react';
import ThemeInjector from '../../../ThemeInjector';
import ProfileCardV1 from './ProfileCardSmall';

module.exports = ({ storiesOf }) => (
  storiesOf('ProfileCardSmall', module)
    .add('ProfileCard1', () => (
      <ThemeInjector>
        <ProfileCardV1>
          123
        </ProfileCardV1>
      </ThemeInjector>
    ))
    .add('ProfileCard2', () => (
      <ThemeInjector>
        <ProfileCardV1 img="https://picsum.photos/200" name="Jason Bourne" info="Engineer" />
      </ThemeInjector>
    ))
);
