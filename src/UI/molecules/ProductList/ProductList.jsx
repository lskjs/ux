import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  ItemCard,
  CardImage,
  CardBody,
  CardTitle,
  CardPrice,
  StrikeThroughItem,
  Divider,
  CardDesc,
} from './ProductList.styles';

class ProductList extends PureComponent {
  render() {
    return (
      <ItemCard>
        <CardImage href={DEMO.link}>
          <img alt="product" src={product.img} />
        </CardImage>
        <CardBody>
          <CardTitle>
            <a href="{product.link}">{product.name}</a>
            <span>Accessories</span>
          </CardTitle>
          <CardPrice>
            <StrikeThroughItem true>$699.99</StrikeThroughItem>
            <StrikeThroughItem>$649.99</StrikeThroughItem>
          </CardPrice>
          <Divider />
          <CardDesc>From the way it works to the way it looks, Watch isn’t just something you wear. It’s an essential part of who you are.</CardDesc>
        </CardBody>
      </ItemCard>
    );
  }
}
