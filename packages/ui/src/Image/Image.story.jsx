import React from 'react';
import random from 'lodash/random';
import Story from '@lskjs/dev/Story';
import Image from './Image';

const avatarImg = `https://randomuser.me/api/portraits/men/${random(99)}.jpg`;
const exifImg = 'https://ui.buzz.guru/1554319977101_22.jpeg';

export default ({ storiesOf }) => (
  storiesOf('Image', module)
    .add('Default as img (title,src)', () => (
      <Story>
        <Image
          title="John Smith"
          src={avatarImg}
        />
      </Story>
    ))
    .add('exif', () => (
      <Story>
        <img
          style={{ width: 100 }}
          title="John Smith"
          src={exifImg}
        />
        <Image
          style={{ width: 100 }}
          title="John Smith"
          src={exifImg}
        />
      </Story>
    ))
);
