import React from 'react';
import Button from '../../../Button';
import CTAInline from './CTAInline';
import ThemeInjector from '../../../ThemeInjector';

module.exports = ({ storiesOf }) => (
  storiesOf('ui/CTAInline', module)
    .add('Default', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <CTAInline
            title="Download it now and get up and running in minutes"
            actions={(
              <React.Fragment>
                <Button paint="primary">Let's start</Button>
                <Button paint="default">Cancel</Button>
              </React.Fragment>
            )}
          />
        </ThemeInjector>
      </div>
    ))
);
