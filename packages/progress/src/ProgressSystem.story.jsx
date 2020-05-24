/* eslint-disable react/button-has-type */
import React, { useRef } from 'react';
import Story from '@lskjs/dev/Story';
import ProgressSystem from './ProgressSystem';

export default ({ storiesOf }) =>
  storiesOf('progress/ProgressSystem').add('refs', () => {
    const ref = useRef();
    global.progress = ref;
    return (
      <Story>
        <ProgressSystem ref={ref} />
        <button onClick={() => console.log(ref)}>ref</button>
        <button onClick={() => ref.current.start()}>start</button>
        <button onClick={() => ref.current.finish()}>finish</button>
      </Story>
    );
  });
