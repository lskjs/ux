import React from 'react'; //eslint-disable-line
import PercentSlider from './PercentSlider';
import ThemeInjector from '../../../ThemeInjector';

module.exports = ({ storiesOf }) => (
  storiesOf('PercentSlider', module)
    .add('default', () => (
      <ThemeInjector>
        <PercentSlider />
      </ThemeInjector>
    ))
);
