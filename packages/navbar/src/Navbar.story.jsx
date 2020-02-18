import React from 'react';
import Story from '@lskjs/dev/Story';
import Navbar from './Navbar';

export default ({ storiesOf }) =>
  storiesOf('ui/Navbar', module).add('default', () => (
    <Story>
      <Navbar href="/test">Link </Navbar>
    </Story>
  ));
