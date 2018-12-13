import React from 'react';
import ProductList from './ProductList';
import ThemeInjector from '../../../ThemeInjector';

const articles = [
  {
    img: 'https://picsum.photos/300',
    productLink: '',
    nameLink: '',
    name: 'Silver Watch',
    oldPrice: true,
  },
];

module.exports = ({ storiesOf }) => (
  storiesOf('ProductList', module)
    .add('ProductList', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <ProductList {...articles[0]} />
        </ThemeInjector>
      </div>
    ))
);