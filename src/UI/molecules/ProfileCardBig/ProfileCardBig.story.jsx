import React from 'react';
import ThemeInjector from '../../../ThemeInjector';
import ProfileCardBig from './ProfileCardBig';

module.exports = ({ storiesOf }) => (
  storiesOf('ProfileCardBig', module)
    .add('ProfileCard1', () => (
      <ThemeInjector>
        <ProfileCardBig>
          123
        </ProfileCardBig>
      </ThemeInjector>
    ))
    .add('ProfileCard2', () => (
      <ThemeInjector>
        <ProfileCardBig img="https://picsum.photos/200" name="Jason Bourne" info="Engineer" sign="I must confess I'm American (I know… nobody's perfect)" />
      </ThemeInjector>
    ))
);
