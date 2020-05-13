/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import Story from '@lskjs/dev/Story';
import Link from '@lskjs/link';
import Breadcrumbs from './Breadcrumbs';

export default ({ storiesOf }) =>
  storiesOf('page/Breadcrumbs', module).add('default', () => (
    <Story>
      <Breadcrumbs
        items={[
          {
            title: 'Hello',
            href: '/hello',
          },
          {
            title: 'Wonderful',
            href: '/wonderful',
          },
          {
            title: 'World',
          },
        ]}
        render={({ href, title }) => (href ? <Link href={href}>{title}</Link> : title)}
      />
    </Story>
  ));
