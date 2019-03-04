import React from 'react';
import Story from '../Story';
import Progress from './Progress';

const Wrapper = ({ children }) => (
  <div style={{ padding: 100, background: '#eee', border: '1px solid black' }}>
    <div style={{ padding: 100, background: '#ccc', border: '1px solid black' }}>
      {children}
    </div>
  </div>
);

export default ({ storiesOf }) => (
  storiesOf('Progress', module)
    .add('default', () => (
      <Story>
        <Wrapper>
          <Progress />
        </Wrapper>
      </Story>
    ))
    .add('50%', () => (
      <Story>
        <Wrapper>
          <Progress value={50} speed={10} />
        </Wrapper>
      </Story>
    ))
    .add('isLoading', () => (
      <Story>
        <Wrapper>
          <Progress value={30} speed={10} isLoading />
        </Wrapper>
      </Story>
    ))
    .add('global', () => (
      <Story>
        <Wrapper>
          <Progress value={30} speed={1} isLoading global />
        </Wrapper>
      </Story>
    ))
);

