import React from 'react';
import Story from '@lskjs/dev/Story';
import MapIcon from 'react-icons2/mdi/map';
import Navbar from './Navbar';

export default ({ storiesOf }) => (
  storiesOf('ui/Navbar', module)
    .add('Default', () => (
      <Story>
        <Navbar>
          <Navbar.Brand href="/">
            <MapIcon size={32} />
          </Navbar.Brand>
          <Navbar.Profile
            image="https://picsum.photos/50"
            name="Company Title"
            category="Business"
          />
          123
        </Navbar>
      </Story>
    ))
);
