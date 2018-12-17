import React from 'react';
import CalloutRight from './CalloutRight';
import ThemeInjector from '../../../ThemeInjector';

module.exports = ({ storiesOf }) => (
  storiesOf('CalloutRight', module)
    .add('Default', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <CalloutRight />
        </ThemeInjector>
      </div>
    ))
);
