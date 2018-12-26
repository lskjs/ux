import React from 'react';
import Product from './Product';
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

module.exports = ({ storiesOf }) => (
  storiesOf('ui/Product', module)
    .add('Product', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <Product {...articles[0]} />
        </ThemeInjector>
      </div>
    ))
);
