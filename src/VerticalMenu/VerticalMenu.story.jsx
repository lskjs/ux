import React from 'react';
import Story from '../Story';
import VerticalMenu from './VerticalMenu';

export default ({ storiesOf }) => (
  storiesOf('VerticalMenu', module)
    .add('default', () => (
      <Story>
        <div>
          <VerticalMenu />
        </div>
      </Story>
    ))
);
