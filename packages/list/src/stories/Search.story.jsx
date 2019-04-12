import React from 'react';
import Story from '@lskjs/dev/Story';
import DefaultSearchWrapper from '../DefaultSearchWrapper';

const action = name  => (...args)=> console.log('[' + name + ']', ...args)  //eslint-disable-line

export default ({ storiesOf }) => storiesOf('List/DefaultSearchWrapper', module)
  .add('default', () => (
    <Story devtools style={{ padding: 24 }}>
      <DefaultSearchWrapper placeholder="Введите название канала" onChange={action('onChange')} />
    </Story>
  ))
  .add('700ms', () => (
    <Story devtools style={{ padding: 24 }}>
      <DefaultSearchWrapper placeholder="Введите название канала" max={700} onChange={action('onChange')} />
    </Story>
  ));
