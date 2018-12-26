import React from 'react';
import CTAInline from './CTAInline';
import ThemeInjector from '../../../ThemeInjector';

module.exports = ({ storiesOf }) => (
  storiesOf('ui/CTAInline', module)
    .add('Default', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <CTAInline
            title="Download it now and get up and running in minutes"
            buttonText="Let's start"
          />
        </ThemeInjector>
      </div>
    ))
);
