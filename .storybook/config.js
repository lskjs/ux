import { configure, storiesOf } from '@storybook/react';

import { config } from 'storybox';
import params from './params';
config(params);


//
// configure(() => {
//
//   storiesOf('Button', module)
//     .add('asd with text', () => (
//       <button onClick={() => action('clicked')}>Hello button</button>
//     ));
// }, module);
// //
// // storybox
