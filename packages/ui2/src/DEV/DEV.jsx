import React from 'react';

import { isDev } from './utils/isDev';
import { Zebra } from './Zebra';

export const DEV = ({ children, json, pretty = true, condition = isDev(), ...props }) =>
  condition ? (
    <Zebra border="#e43c3c33" colors={['#b5281d30', '#f0413430']} {...props}>
      {json ? (
        <pre>
          {pretty
            ? JSON.stringify(json, null, 2)
            : // ? JSON.stringify(json, null, 2).replace(/,"/ig, ',\n"')
              JSON.stringify(json)}
        </pre>
      ) : (
        children
      )}
    </Zebra>
  ) : null;

export default DEV;
