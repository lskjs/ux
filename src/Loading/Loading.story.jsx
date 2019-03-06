import React from 'react';
import ReloadIcon from 'react-icons2/mdi/reload';
import Loading from './Loading';
import Story from '../Story';

export default ({ storiesOf }) => (
  storiesOf('Loading', module)
    .add('svg default', () => (
      <Story>
        <Loading type="svg" full />
      </Story>
    ))
    .add('custom', () => (
      <Story>
        <Loading
          icon={<ReloadIcon />}
        />
      </Story>
    ))
);
