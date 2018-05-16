import React from 'react';
import ThemeInjector from '../ThemeInjector';
import A from './A';

module.exports = ({ storiesOf, action }) => (
  storiesOf('A', module)
    .add('empty', () => (
      <ThemeInjector>
        <A>
          Empty
        </A>
      </ThemeInjector>
    ))
    .add('href', () => (
      <ThemeInjector>
        <A href="/test">
          Href
        </A>
      </ThemeInjector>
    ))
    .add('onClick', () => (
      <ThemeInjector>
        <A href="/test" onClick={action('onClick')}>
        onClick
        </A>
      </ThemeInjector>
    ))
);

