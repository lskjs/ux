import React from 'react';
import Story from '@lskjs/dev/Story';
import Link from '@lskjs/link';
import AnimatedLink from './AnimatedLink';

export default ({ storiesOf }) => (
  storiesOf('ui/AnimatedLink', module)
    .add('Default', () => (
      <Story>
        <AnimatedLink
          href="//google.com"
          target="_blank"
          icon="arrow-right"
        >
          Читать дальше
        </AnimatedLink>
      </Story>
    ))
    .add('Primary', () => (
      <Story>
        <AnimatedLink
          href="//google.com"
          target="_blank"
          icon="arrow-right"
          paint="primary"
        >
          Читать дальше
        </AnimatedLink>
      </Story>
    ))
    .add('With Link', () => (
      <Story>
        <AnimatedLink
          componentClass={Link}
          href="/?selectedKind=BlogCard"
          icon="arrow-right"
          paint="primary"
        >
          Читать дальше
        </AnimatedLink>
      </Story>
    ))
);
