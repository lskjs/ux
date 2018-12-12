import React from 'react';
import ThemeInjector from '../../../ThemeInjector';

import '../../../antd.g.css';
import '../../../bootstrap.g.css';


import LoginScreen from './LoginScreen';

module.exports = ({ storiesOf }) => (
  storiesOf('LoginScreen', module)
    .add('LoginScreen', () => (
      <ThemeInjector>
        <LoginScreen />
      </ThemeInjector>
    ))
);
