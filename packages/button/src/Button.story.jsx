import React from 'react';
import Story from '@lskjs/dev/Story';

import Button from './Button';

export default ({ storiesOf }) =>
  storiesOf('button', module)
    .add('default', () => (
      <Story>
        <Button>Кнопка</Button>
      </Story>
    ));
