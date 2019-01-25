import React from 'react';
import ProductList from './ProductList';
import ThemeInjector from '../../../ThemeInjector';

const articles = [
  {
    image: 'https://picsum.photos/300',
    href: '',
    category: 'Accessories',
    name: 'Silver Watch',
    oldPrice: '$699.99',
    price: '$300.00',
    description: 'From the way it works to the way it looks, Watch isn’t just something you wear. It’s an essential part of who you are.',
  },
];

export default ({ storiesOf }) => (
  storiesOf('ui/ProductList', module)
    .add('ProductList', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <ProductList {...articles[0]} />
        </ThemeInjector>
      </div>
    ))
);
