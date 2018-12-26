import React from 'react';
import Callout from './Callout';
import ThemeInjector from '../../../ThemeInjector';

module.exports = ({ storiesOf }) => (
  storiesOf('ui/Callout', module)
    .add('Default', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <Callout />
        </ThemeInjector>
      </div>
    ))
);
