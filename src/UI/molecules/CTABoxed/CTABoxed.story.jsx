import React from 'react';
import CTABoxed from './CTABoxed';
import Button from '../../../Button';
import ThemeInjector from '../../../ThemeInjector';

export default ({ storiesOf }) => (
  storiesOf('ui/CTABoxed', module)
    .add('Default', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <CTABoxed
            actions={(
              <Button paint="primary">{"Let's"} start</Button>
            )}
            title="Download it now and get up and running in minutes"
          />
        </ThemeInjector>
      </div>
    ))
    .add('TransparentBG', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <CTABoxed
            actions={(
              <Button paint="primary">{"Let's"} start</Button>
            )}
            title="Download it now and get up and running in minutes"
            transparent
          />
        </ThemeInjector>
      </div>
    ))
);
