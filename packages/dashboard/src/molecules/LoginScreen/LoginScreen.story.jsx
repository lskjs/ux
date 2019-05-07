import React from 'react';
import Story from '@lskjs/dev/Story';

import LoginScreen from './LoginScreen';

export default ({ storiesOf }) => (
  storiesOf('ui/LoginScreen', module)
    .add('LoginScreen', () => (
      <Story>
        <LoginScreen />
      </Story>
    ))
);
