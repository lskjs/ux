import React from 'react';
import Link from '../../../Link';
import AnimatedLink from './AnimatedLink';
import ThemeInjector from '../../../ThemeInjector';

import '../../../styles/lib/antd.g.css';

module.exports = ({ storiesOf }) => (
  storiesOf('ui/AnimatedLink', module)
    .add('Default', () => (
      <ThemeInjector>
        <AnimatedLink
          href="//google.com"
          target="_blank"
          icon="arrow-right"
        >
          Читать дальше
        </AnimatedLink>
      </ThemeInjector>
    ))
    .add('Primary', () => (
      <ThemeInjector>
        <AnimatedLink
          href="//google.com"
          target="_blank"
          icon="arrow-right"
          paint="primary"
        >
          Читать дальше
        </AnimatedLink>
      </ThemeInjector>
    ))
    .add('With Link', () => (
      <ThemeInjector>
        <AnimatedLink
          componentClass={Link}
          href="/?selectedKind=BlogCard"
          icon="arrow-right"
          paint="primary"
        >
          Читать дальше
        </AnimatedLink>
      </ThemeInjector>
    ))
);
