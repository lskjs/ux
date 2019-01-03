import React from 'react';
import ThemeInjector from '../../../ThemeInjector';

import '../../../styles/lib/antd.g.css';
import '../../../styles/lib/bootstrap.g.css';


import LoginScreen from './LoginScreen';

module.exports = ({ storiesOf }) => (
  storiesOf('ui/LoginScreen', module)
    .add('LoginScreen', () => (
      <ThemeInjector>
        <LoginScreen />
      </ThemeInjector>
    ))
);
