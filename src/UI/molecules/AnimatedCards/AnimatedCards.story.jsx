import React from 'react';
import AnimatedCards from './AnimatedCards';
import Story from '../../../Story';

import '../../../styles/lib/antd.g.css';

export default ({ storiesOf }) => (
  storiesOf('ui/AnimatedCards', module)
    .add('Default', () => (
      <Story>
        <AnimatedCards>
          Читать дальше
        </AnimatedCards>
      </Story>
    ))
);
