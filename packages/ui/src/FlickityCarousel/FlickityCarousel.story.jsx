import React from 'react';
import Story from '@lskjs/dev/Story';
import FlickityCarousel from './FlickityCarousel';

export default ({ storiesOf }) => (
  storiesOf('ui/FlickityCarousel', module)
    .add('code', () => (
      <Story>
        <FlickityCarousel>
          <img src="https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg" alt="123" />
          <img src="http://www.radionetplus.ru/uploads/posts/2013-04/1365401196_teplye-oboi-1.jpeg" alt="123" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6OV5UpIR2u62-Wb2zj5pgOlDQ3PzMDIZxMpz2RXfUN4xJcoe" alt="123" />
        </FlickityCarousel>
      </Story>
    ))
);
