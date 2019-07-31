import React from 'react';
import Story from '@lskjs/dev/Story';
import Link from '@lskjs/ui/Link';
import AntTag from './AntTag';

export default ({ storiesOf }) => (
  storiesOf('dashboard/ui/AntTag', module)
    .add('Default', () => (
      <Story>
        <AntTag>
          Просто
        </AntTag>
        <AntTag closable>
          Крест
        </AntTag>
        <AntTag target="_blank" href="https://vk.com">
          Link
        </AntTag>
        <AntTag componetClass={Link} href="https://vk.com">
          Link
        </AntTag>
      </Story>
    ))
);
