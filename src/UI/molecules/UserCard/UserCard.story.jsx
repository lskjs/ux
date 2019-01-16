import React from 'react';
import random from 'lodash/random';

import UserCard from './UserCard';
import ThemeInjector from '../../../ThemeInjector';
import '../../../styles/lib/antd.g.css';

const user = () => ({
  id: random(99),
  title: 'John Smith',
  src: `https://randomuser.me/api/portraits/men/${random(99)}.jpg`,
  position: 'Managing partner - DELTA2020',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', // eslint-disable-line
  footer: 'Your request has been passed to the QV Team',
});

module.exports = ({ storiesOf }) => (
  storiesOf('ui/UserCard', module)
    .add('default', () => (
      <ThemeInjector>
        <UserCard {...user()} />
      </ThemeInjector>
    ))
);
