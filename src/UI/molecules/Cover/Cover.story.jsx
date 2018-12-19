import React from 'react';
import Cover from './Cover';

module.exports = ({ storiesOf }) => (
  storiesOf('Cover', module)
    .add('Default', () => (
      <Cover
        image="https://pp.userapi.com/c636819/v636819936/3474a/g6I0ETjiQ4I.jpg"
      >
        <Cover.Title>100+ Components</Cover.Title>
        <Cover.SubTitle>
          Ant admin is a multi-purpose
          template which comes with a
          huge collection of components out of box.
        </Cover.SubTitle>
        <Cover.Divider />
        All components are well designed & easy to use.
      </Cover>
    ))
);
