import React from 'react';
import State from '../State';
import DevTools from '../DevTools';
import Performance from '../Performance';
import Story from './Story';

export default ({ children, devtools, state = {}, ...props }) => (
  <Story {...props}>
    <State {...state}>
      <Performance>{children}</Performance>
    </State>
    {devtools && <DevTools />}
  </Story>
);
