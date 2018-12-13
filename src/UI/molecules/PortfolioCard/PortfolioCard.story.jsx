import React from 'react';
import PortfolioCard from './PortfolioCard';
import ThemeInjector from '../../../ThemeInjector';

const articles = [
  {
    img: 'https://picsum.photos/300/200?random',
    link: '',
    name: 'Lorem ipsum dolor',
    tag: 'PSD',
  },
  {
    img: 'https://picsum.photos/300/200?random',
    link: '',
    name: 'Lorem ipsum dolor',
    tag: 'PSD',
    position: 'bottom',
  },
];

module.exports = ({ storiesOf }) => (
  storiesOf('PortfolioCard', module)
    .add('Card1', () => (
      <div style={{ padding: 60, maxWidth: 400 }}>
        <ThemeInjector>
          <PortfolioCard {...articles[0]} />
        </ThemeInjector>
      </div>
    ))
    .add('Card2', () => (
      <div style={{ padding: 60, maxWidth: 400 }}>
        <ThemeInjector>
          <PortfolioCard {...articles[1]} />
        </ThemeInjector>
      </div>
    ))
);
