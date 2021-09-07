import React from 'react';

import DEV from '../src/DEV';
import Grill from '../src/Grill';
import Performance from '../src/Performance';
import Story from '../src/Story';
import setDev from '../src/utils/setDev';
import Zebra from '../src/Zebra';
// import ObserverDEV from './ObserverDEV';
setDev(true);
export default ({ storiesOf, action }) =>
  storiesOf('dev', module)
    .add('<Zebra />', () => (
      <div>
        <Zebra>{'<Zebra>Content</Zebra>'}</Zebra>
        <br />
        <Zebra padding={20}>{'<Zebra padding={20}/>'}</Zebra>
        <br />
        <Zebra padding={20} background="#ffffff">
          {'<Zebra padding={20}  background="#ffffff"/>'}
        </Zebra>
        <br />
        <Zebra>TODO: написать zebra with border</Zebra>
        <br />
        <Zebra>TODO: написать zebra with color</Zebra>
        <br />
        <Zebra>TODO: написать zebra with border & color</Zebra>
        <br />
        <Zebra>TODO: написать zebra without border & color</Zebra>
        <br />
        <Zebra>TODO: написать zebra with colors</Zebra>
        <br />
        <Zebra color="#000000cc" border={2} padding={20} colors={['#00000033', '#ffffffcc']}>
          TODO: дооформить
        </Zebra>
      </div>
    ))
    .add('<Story />', () => <Story>Hi!</Story>)
    .add('<DEV />', () => (
      <Story>
        <DEV>{'<Dev /> with some custom content'}</DEV>
        <br />
        <DEV
          json={{
            hello: 'world',
            message: '<Dev /> with some JSON content',
            example: "<Dev json={{ hello: 'world' }}>",
          }}
        />
      </Story>
    ))
    .add('<Grill />', () => (
      <Story>
        <Grill>TODO: Grill</Grill>
      </Story>
    ))
    .add('<Performance />', () => (
      <Story>
        <Performance>Performance</Performance>
      </Story>
    ));
