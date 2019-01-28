import React from 'react';
import CTACentered from './CTACentered';
import ThemeInjector from '../../../ThemeInjector';
import Button from '../../../Button';

const articles = [
  {
    title: 'Services We Provide',
    subtitle: 'Whether you are experiencing a creative block or needassistance in creating a brand for your new business, we are at your service.',
    actions: <Button paint="primary">Subscribe</Button>,
    footer: 'No spam! We promise, only best stuff',
  },
];

export default ({ storiesOf }) => (
  storiesOf('ui/CTACentered', module)
    .add('Default', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <CTACentered {...articles[0]} />
        </ThemeInjector>
      </div>
    ))
);
