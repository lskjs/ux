/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import Story from '@lskjs/dev/Story';
import Breadcrumbs from './Breadcrumbs';
import A from '../A';

export default ({ storiesOf, action }) => (
  storiesOf('ui/Breadcrumbs', module)
    .add('default', () => (
      <Story>
        <Breadcrumbs
          items={[{
            title: 'Hello',
            href: '/hello',
          }, {
            title: 'Wonderful',
            href: '/wonderful',
          }, {
            title: 'World',
          }]}
          render={({ href, title }) => (href ? <A href={href}>{title}</A> : title)}
        />
      </Story>
    ))
);
