import React from 'react';
import Feature from './Feature';
import ThemeInjector from '../../../ThemeInjector';

const articles = [
  {
    icon: '123',
    header: 'RESPONSIVE DESIGN',
    content1: 'mobile-ready design adopt to ',
    content2: 'any device',
    center: true,
  },
];

module.exports = ({ storiesOf }) => (
  storiesOf('ui/Feature', module)
    .add('Default', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <Feature {...articles[0]} />
        </ThemeInjector>
      </div>
    ))
);
