import React from 'react';
import BackToTop from './BackToTop';
import Story from '@lskjs/dev/Story';

export default ({ storiesOf }) => (
  storiesOf('ui/BackToTop', module)
    .add('default', () => (
      <Story>
        <div style={{ minHeight: '2000px' }}>
          <BackToTop />
        </div>
      </Story>
    ))
    .add('another color', () => (
      <Story>
        <div style={{ minHeight: '2000px' }}>
          <BackToTop paint="warning" />
        </div>
      </Story>
    ))
    .add('without fixed', () => (
      <Story>
        <div style={{ minHeight: '2000px' }}>
          <BackToTop fixed={false} />
        </div>
      </Story>
    ))
    .add('position top left', () => (
      <Story>
        <div style={{ minHeight: '2000px' }}>
          <BackToTop position="top left" />
        </div>
      </Story>
    ))
    .add('position top right', () => (
      <Story>
        <div style={{ minHeight: '2000px' }}>
          <BackToTop position="top right" />
        </div>
      </Story>
    ))
    .add('position right top', () => (
      <Story>
        <div style={{ minHeight: '2000px' }}>
          <BackToTop position="right top" />
        </div>
      </Story>
    ))
    .add('position bottom left', () => (
      <Story>
        <div style={{ minHeight: '2000px' }}>
          <BackToTop position="bottom left" />
        </div>
      </Story>
    ))
    .add('position bottom right', () => (
      <Story>
        <div style={{ minHeight: '2000px' }}>
          <BackToTop position="bottom right" />
        </div>
      </Story>
    ))
    .add('position right bottom', () => (
      <Story>
        <div style={{ minHeight: '2000px' }}>
          <BackToTop position="right bottom" />
        </div>
      </Story>
    ))
    .add('position left bottom', () => (
      <Story>
        <div style={{ minHeight: '2000px' }}>
          <BackToTop position="left bottom" />
        </div>
      </Story>
    ))
);
