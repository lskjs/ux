import React from 'react';
import CTACentered from './CTACentered';
import ThemeInjector from '../../../ThemeInjector';

module.exports = ({ storiesOf }) => (
  storiesOf('ui/CTACentered', module)
    .add('Default', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <CTACentered />
        </ThemeInjector>
      </div>
    ))
);
