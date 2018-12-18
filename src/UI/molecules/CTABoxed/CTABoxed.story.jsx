import React from 'react';
import CTABoxed from './CTABoxed';
import ThemeInjector from '../../../ThemeInjector';

const articles = [
  {
    transparent: false,
  },
  {
    transparent: true,
  },
];

module.exports = ({ storiesOf }) => (
  storiesOf('CTABoxed', module)
    .add('Default', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <CTABoxed {...articles[0]} />
        </ThemeInjector>
      </div>
    ))
    .add('TransparentBG', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <CTABoxed {...articles[1]} />
        </ThemeInjector>
      </div>
    ))
);
