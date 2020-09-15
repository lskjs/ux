import React from 'react';
import Story from '@lskjs/dev/Story';
import scrollTo, { setDefaultOptions } from '.';

setDefaultOptions({
  debug: 1,
});

export default ({ storiesOf }) =>
  storiesOf('scroll/utils', module).add('scrollTo', () => (
    <Story>
      <button onClick={() => scrollTo(9999)}>bottom</button>
      {[...Array(100).keys()].map((i) => (
        <div>{i}</div>
      ))}
      <button onClick={() => scrollTo(0)}>top</button>
    </Story>
  ));
