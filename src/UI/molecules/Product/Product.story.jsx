import React from 'react';
import Product from './Product';
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
  storiesOf('Product', module)
    .add('Product', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <Product {...articles[0]} />
        </ThemeInjector>
      </div>
    ))
);
