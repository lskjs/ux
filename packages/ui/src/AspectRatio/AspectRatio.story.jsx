import React from 'react';
import Story from '@lskjs/dev/Story';
import AspectRatio from './AspectRatio';

export default ({ storiesOf }) => (
  storiesOf('AspectRatio', module)
    .add('Auto', () => (
      <Story>
        <AspectRatio>
          <img width="100%" alt="" src="https://picsum.photos/800" />
        </AspectRatio>
      </Story>
    ))
    .add('1:1', () => (
      <Story>
        <AspectRatio ratio="1:1">
          <img width="100%" alt="" src="https://picsum.photos/800" />
        </AspectRatio>
      </Story>
    ))
    .add('1:0.89', () => (
      <Story>
        <AspectRatio ratio="1:0.89">
          <img width="100%" alt="" src="https://picsum.photos/800" />
        </AspectRatio>
      </Story>
    ))
    .add('4:3', () => (
      <Story>
        <AspectRatio ratio="4:3">
          <img width="100%" alt="" src="https://picsum.photos/800" />
        </AspectRatio>
      </Story>
    ))
    .add('16:9', () => (
      <Story>
        <AspectRatio ratio="16:9">
          <img width="100%" alt="" src="https://picsum.photos/800" />
        </AspectRatio>
      </Story>
    ))
    .add('21:9', () => (
      <Story>
        <AspectRatio ratio="21:9">
          <img width="100%" alt="" src="https://picsum.photos/800" />
        </AspectRatio>
      </Story>
    ))
);
