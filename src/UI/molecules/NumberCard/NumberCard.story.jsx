import React from 'react';
import NumberCard from './NumberCard';
import ThemeInjector from '../../../ThemeInjector';

export default ({ storiesOf }) => (
  storiesOf('ui/NumberCard', module)
    .add('Default', () => (
      <div style={{ padding: 60, maxWidth: 400 }}>
        <ThemeInjector>
          <NumberCard
            number={16}
            text="grown"
          />
        </ThemeInjector>
      </div>
    ))
);
