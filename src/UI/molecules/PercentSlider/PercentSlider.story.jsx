import React from 'react'; //eslint-disable-line
import PercentSlider from './PercentSlider';
import ThemeInjector from '../../../ThemeInjector';

export default ({ storiesOf }) => (
  storiesOf('hz/PercentSlider', module)
    .add('default', () => (
      <ThemeInjector>
        <PercentSlider />
      </ThemeInjector>
    ))
);
