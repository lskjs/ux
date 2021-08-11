import React, { useState } from 'react';

import Landing from '../src/Landing';
import CustomSlide1 from '../src/slides/CustomSlide1';
import CustomSlide2 from '../src/slides/CustomSlide2';

const mock = [
  {
    type: 'header',
    data: {
      brand: 'СуперЛендос',
      menu: [
        {
          key: 'home',
          title: 'Главная',
          href: '/',
        },
        {
          key: 'about',
          title: 'О нас',
          href: '/about',
        },
        {
          key: 'reviews',
          title: 'Отзывы',
          href: '/reviews',
        },
      ],
    },
  },
  {
    type: 'custom1',
    data: {},
  },
  {
    type: 'custom1',
    data: {},
  },
  {
    type: 'custom2',
    data: {},
  },
];

const mock2 = [
  {
    type: 'header',
    data: {
      brand: 'СуперЛендос',
      menu: [
        {
          key: 'home',
          title: 'Главная',
          href: '/',
        },
        {
          key: 'about',
          title: 'О нас',
          href: '/about',
        },
        {
          key: 'reviews',
          title: 'Отзывы',
          href: '/reviews',
        },
      ],
    },
  },
  {
    type: 'custom2',
    data: {},
  },
];

const DynamicComponent = () => {
  const [markup, setMarkup] = useState(mock);
  const handleChangeMarkup = () => {
    setMarkup(mock2);
  };
  return (
    <>
      <button type="button" onClick={handleChangeMarkup} style={{ padding: 20, margin: 20 }}>
        Сменить markup (Рендер не должен смениться)
      </button>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(markup, null, 2)}</pre>
      <Landing
        id="home"
        markup={markup}
        slides={(slides) => ({
          ...slides,
          custom1: CustomSlide1,
          custom2: CustomSlide2,
        })}
      />
    </>
  );
};

const DynamicComponent2 = () => {
  const [page, setPage] = useState('test-1');
  const [markup, setMarkup] = useState(mock);
  const handleChangeMarkup = () => {
    setPage('test-2');
    setMarkup(mock2);
  };
  return (
    <>
      <button onClick={handleChangeMarkup} style={{ padding: 20, margin: 20 }}>
        Сменить markup & page
      </button>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify({ id: page, markup }, null, 2)}</pre>
      <Landing
        id={page}
        markup={markup}
        slides={(slides) => ({
          ...slides,
          custom1: CustomSlide1,
          custom2: CustomSlide2,
        })}
      />
    </>
  );
};

interface StoryProps {
  storiesOf: (arg1: string, arg2: any) => any;
}

export default ({ storiesOf }: StoryProps) =>
  storiesOf('landing/Landing', module)
    .add('custom slides through prop', () => (
      <Landing
        id="home"
        markup={mock}
        slides={(slides) => ({
          ...slides,
          custom1: CustomSlide1,
          custom2: CustomSlide2,
        })}
      />
    ))
    .add('custom slides through prop as object', () => (
      <Landing
        id="home"
        markup={mock}
        slides={{
          custom1: CustomSlide1,
          custom2: CustomSlide2,
        }}
      />
    ))
    .add('dynamically change markup prop', () => <DynamicComponent />)
    .add('dynamically change markup & page prop', () => <DynamicComponent2 />)
    .add('custom slides through static', () => {
      Landing.defaultAcceptableSlides = {
        ...Landing.defaultAcceptableSlides,
        custom1: CustomSlide1,
        custom2: CustomSlide2,
      };
      return <Landing id="test" markup={mock} />;
    });
