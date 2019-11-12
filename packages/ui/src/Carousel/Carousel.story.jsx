import React from 'react';
import Story from '@lskjs/dev/Story';
import range from 'lodash/range';
import {
  AnotherButtonRight,
  AnotherButtonLeft,
  AnotherArrowLeft,
  AnotherArrowRight,
} from './Carousel.style';
import Carousel from './Carousel';

const items = [
  {
    src: 'https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/3e/e0/7e/3ee07e4c-d55a-40d1-d6a6-2fc92ffd6e8a/pr_source.png/230x0w.jpg',
    title: 'title 1',
  },
  {
    src: 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/d6/ae/66/d6ae6690-9af2-228b-6638-de1874a6b01a/mzl.gcfpyofu.png/690x0w.jpg',
    title: 'title 2',
  },
  {
    src: 'https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/4f/f5/50/4ff55012-c009-9038-4f46-2226e9703fa2/pr_source.png/690x0w.jpg',
    title: 'title 3',
  },

  'https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/8c/4c/c9/8c4cc93e-052a-a4e2-8595-506663ab60c3/mzl.znsdibah.png/690x0w.jpg',
  'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/10/47/fd/1047fdea-a852-cf42-a072-15c9080bab47/mzl.wlrcmcyl.jpg/690x0w.jpg',
  'https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/e6/8b/a7/e68ba780-2572-9b9e-095a-48e9132759ba/mzl.xfjbckqg.png/900x0w.jpg',
  'https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/cd/ee/aa/cdeeaa6e-ffb8-638c-30d7-705a18f96cff/pr_source.png/300x0w.jpg',
  'https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/64/9c/89/649c8985-f65e-8eb8-54c6-3638f7ea916f/pr_source.png/900x0w.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/57/36/f4/5736f49d-5b16-17f1-d447-cfe90a0051b1/mzl.rchumyzg.png/900x0w.jpg',

  {
    src: 'https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/a1/86/f0/a186f0a1-aab3-33a0-3cbc-bff6e73f26ee/pr_source.png/690x0w.jpg',
    title: 'title',
  },
  {
    src: 'https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/87/38/89/873889bf-ba03-0b74-4412-d6e80b583416/mzl.ymuofzyg.png/690x0w.jpg',
    title: 'title',
  },

  {
    src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple62/v4/04/39/64/0439647b-32f1-505c-6595-95765006f9a5/mzl.toewctcb.jpg/690x0w.jpg',
    title: 'title',
  },
  {
    src: 'https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/97/0c/1b/970c1bd6-acdf-5918-3278-d09caab9d828/mzl.lnmcnpct.png/690x0w.jpg',
    title: 'title',
  },

  {
    src: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/df/c6/cb/dfc6cb4e-1715-97ec-bdb0-6f7067dedbfe/pr_source.jpg/690x0w.jpg',
    title: 'title',
  },
];

const wideItems = [
  {
    src: 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/75/91/74/759174ed-15e2-5040-8858-9810c9a5d877/mzl.vrzbcvzh.jpg/643x0w.jpg',
    title: 'title 1',
  },
  {
    src: 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/53/51/24/535124d0-3d6f-a02f-7cef-969241c0a48f/mzl.zffkxvuh.jpg/643x0w.jpg',
    title: 'title 2',
  },
  {
    src: 'https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/7f/fe/2b/7ffe2bdd-0cf8-66ec-3fb8-aa3950960d0d/mzl.vnsutomj.jpg/643x0w.jpg',
    title: 'title 3',
  },

];

const zeroItem = [];

const ItemComponent = ({ title }) => (
  <div style={{ border: '1px solid red' }}>
    <p>{title}</p>
    <p>{title}</p>
    <b>Другой Элемент</b>
  </div>
);

export default ({ storiesOf }) => (
  storiesOf('ui/Carousel', module)
    .add('default', () => (
      <Story>
        <Carousel items={items} />
      </Story>
    ))
    .add('with lightbox', () => (
      <Story>
        <Carousel items={items} lightBox />
      </Story>
    ))
    .add('ItemComponent', () => (
      <Story>
        <Carousel
          items={items}
          ItemComponent={ItemComponent}
        />
      </Story>
    ))
    .add('Custom non variable', () => (
      <Story>
        <Carousel
          variableWidth={false}
          items={items}
          itemWidth={200}
          itemHeight={250}
        />
      </Story>
    ))
    .add('Custom height/weight', () => (
      <Story>
        <Carousel
          items={items}
          itemWidth={200}
          itemHeight={250}
        />
      </Story>
    ))
    .add('Custom big height/weight', () => (
      <Story>
        <Carousel
          items={items}
          itemWidth={300}
          itemHeight={600}
        />
      </Story>
    ))
    .add('1 item', () => (
      <Story>
        <Carousel
          items={[items[0]]}
        />
      </Story>
    ))
    .add('zero', () => (
      <Story>
        <Carousel
          items={zeroItem}
        />
      </Story>
    ))
    .add('100 item', () => (
      <Story>
        <Carousel
          items={range(100).map(i => items[0])}
        />
      </Story>
    ))
    .add('arrows', () => (
      <Story>
        <Carousel
          items={items}
          nextArrow={<AnotherButtonRight><AnotherArrowLeft /></AnotherButtonRight>}
          prevArrow={<AnotherButtonLeft><AnotherArrowRight /></AnotherButtonLeft>}
        />
      </Story>
    ))
    .add('wide images', () => (
      <Story>
        <Carousel
          items={wideItems}
        />
      </Story>
    ))
);
