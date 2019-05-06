import React from 'react'; //eslint-disable-line
import PercentSlider from './PercentSlider';
import Story from '@lskjs/dev/Story';

export default ({ storiesOf }) => (
  storiesOf('hz/PercentSlider', module)
    .add('default', () => (
      <Story>
        <PercentSlider />
      </Story>
    ))
);
