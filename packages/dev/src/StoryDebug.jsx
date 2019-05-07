import React from 'react';
import DevTools from 'mobx-react-devtools';
import State from './State';
import Performance from './Performance';

export default ({ children, devtools, style, state = {} }) => (
  <Performance>
    <div
      style={{
        border: '30px #eee solid',
        // width: '80%',
        // fontFamily: 'Gotham Pro',
        // padding: '10px',
        ...style,
      }}
    >
      <State {...state}>
        {children}
      </State>
      {devtools && <DevTools />}
    </div>
  </Performance>
);
