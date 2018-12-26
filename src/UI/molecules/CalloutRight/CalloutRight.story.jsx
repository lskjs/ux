import React from 'react';
import CalloutRight from './CalloutRight';
import ThemeInjector from '../../../ThemeInjector';

module.exports = ({ storiesOf }) => (
  storiesOf('ui/CalloutRight', module)
    .add('Default', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <CalloutRight />
        </ThemeInjector>
      </div>
    ))
);
