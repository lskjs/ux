import React from 'react';

const isDev = () => !!(typeof __DEV__ !== 'undefined' ? __DEV__ : global.__DEV__); // eslint-disable-line

const DEV = ({ children, json, pretty = true, condition = true }) => (
  (isDev() && (condition)) ? (
    <div
      data-label="DEV"
      data-dev={isDev()}
      style={{
        background: 'repeating-linear-gradient(45deg,#b5281d30,#b5281d30 10px,#f0413430 0,#f0413430 20px)',
        outline: '1px dashed #ff0000b0',
      }}
    >
      {json
        ? (
          <pre>
            {pretty
              ? JSON.stringify(json, null, 2)
              // ? JSON.stringify(json, null, 2).replace(/,"/ig, ',\n"')
              : JSON.stringify(json)}
          </pre>
        )
        : children}
    </div>
  ) : null
);

export default DEV;
