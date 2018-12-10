import React from 'react';
import 'antd/dist/antd.css';
import ThemeInjector from '../../../ThemeInjector';


import LoginScreen from './LoginScreen';

module.exports = ({ storiesOf }) => (
  storiesOf('LoginScreen', module)
    .add('LoginScreen', () => (
      <ThemeInjector>
        <LoginScreen />
      </ThemeInjector>
    ))
);
