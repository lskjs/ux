import React from 'react';
import PortfolioCard from './PortfolioCard';
import ThemeInjector from '../../../ThemeInjector';

const articles = [
  {
    image: 'https://picsum.photos/300/200?random',
    href: '',
    title: 'Lorem ipsum dolor',
    subtitle: 'PSD',
  },
  {
    image: 'https://picsum.photos/300/200?random',
    href: '',
    title: 'Lorem ipsum dolor',
    subtitle: 'PSD',
    position: 'bottom',
  },
];

module.exports = ({ storiesOf }) => (
  storiesOf('ui/PortfolioCard', module)
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
