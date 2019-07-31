import React from 'react';
import range from 'lodash/range';
import VisibilityScroll from './VisibilityScroll';
import Story from '@lskjs/dev/Story';


export default ({ storiesOf }) => (
  storiesOf('ui/VisibilityScroll', module)
    .add('default', () => (
      <Story>
        <div style={{ minHeight: '2000px' }}>
          <VisibilityScroll trigger={25}>
            <div style={{ border: '2px solid red', position: 'fixed', bottom: '20px', right: '20px' }}>Содержимое</div>
          </VisibilityScroll>
        </div>
      </Story>
    ))
    .add('another value trigger', () => (
      <Story>
        <div style={{ minHeight: '2000px' }}>
          <VisibilityScroll trigger={55}>
            <div style={{ border: '2px solid red', position: 'fixed', bottom: '20px', right: '20px' }}>Содержимое</div>
          </VisibilityScroll>
        </div>
      </Story>
    ))
);
