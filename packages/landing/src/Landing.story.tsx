import React from 'react';
import Landing from './Landing';

import CustomSlide1 from './slides/CustomSlide1';
import CustomSlide2 from './slides/CustomSlide2';

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
    type: 'custom2',
    data: {},
  }
];

interface StoryProps {
  storiesOf: Function,
}

export default ({ storiesOf }: StoryProps) => (
  storiesOf('landing/Landing', module)
    .add('custom slides through prop', () => (
      <Landing
        markup={mock}
        slides={(slides) => ({
          ...slides,
          custom1: CustomSlide1,
          custom2: CustomSlide2,
        })}
      />
    ))
    .add('custom slides through static', () => {
      Landing.defaultAcceptableSlides = {
        ...Landing.defaultAcceptableSlides,
        custom1: CustomSlide1,
        custom2: CustomSlide2,
      }
      return (
        <Landing markup={mock} />
      );
    })
);

