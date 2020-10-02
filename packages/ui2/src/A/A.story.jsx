/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import Story from '@lskjs/dev/Story';
import A from './A';

export default ({ storiesOf, action }) =>
  storiesOf('ui2', module).add('<A />', () => (
    <Story>
      <A>Empty</A>
      <br />
      <A href="/test">Href</A>
      <br />
      <A href="/test" onClick={action('onClick')}>
        onClick
      </A>
    </Story>
  ));
