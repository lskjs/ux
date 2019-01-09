import React from 'react';
import ThemeInjector from '../../../ThemeInjector';
import ProfileCardBig from './ProfileCardBig';

import '../../../styles/lib/antd.g.css';

module.exports = ({ storiesOf }) => (
  storiesOf('ui/ProfileCardBig', module)
    .add('Default', () => (
      <ThemeInjector>
        <ProfileCardBig
          img="https://picsum.photos/200"
          name="Jason Bourne"
          info="Engineer"
          sign="I must confess I'm American (I know… nobody's perfect)"
          // fixHeight={250}
        />
      </ThemeInjector>
    ))
);
