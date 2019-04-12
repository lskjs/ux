import React from 'react';
import Story from '@lskjs/dev/Story';
import DefaultSearchWrapper from '../DefaultSearchWrapper';


export default ({ storiesOf }) => storiesOf('List/DefaultSearchWrapper', module)
  .add('default', () => (
    <Story devtools style={{ padding: 24 }}>
      <DefaultSearchWrapper placeholder="Введите название канала" onChange={console.log} />
    </Story>
  ))
  .add('700ms', () => (
    <Story devtools style={{ padding: 24 }}>
      <DefaultSearchWrapper placeholder="Введите название канала" max={700} onChange={console.log} />
    </Story>
  ));
