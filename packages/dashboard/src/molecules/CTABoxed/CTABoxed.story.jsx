import React from 'react';
import CTABoxed from './CTABoxed';
import Button from '@lskjs/button';
import Story from '@lskjs/dev/Story';

export default ({ storiesOf }) => (
  storiesOf('dashboard/ui/CTABoxed', module)
    .add('Default', () => (
      <Story>
        <CTABoxed
          actions={(
            <Button paint="primary">{"Let's"} start</Button>
          )}
          title="Download it now and get up and running in minutes"
        />
      </Story>
    ))
    .add('TransparentBG', () => (
      <Story>
        <CTABoxed
          actions={(
            <Button paint="primary">{"Let's"} start</Button>
          )}
          title="Download it now and get up and running in minutes"
          transparent
        />
      </Story>
    ))
);
