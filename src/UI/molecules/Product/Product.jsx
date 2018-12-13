import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  ItemCard,
  Image,
  CardBody,
  CardTitle,
  CardPrice,
  StrikeTroughItem,
  CardImage,
  TitleLink,
  TitleSp,
} from './Product.styles';

class Product extends PureComponent {
  static propTypes = {
    productLink: PropTypes.string,
    nameLink: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    oldPrice: PropTypes.bool,
  };
  static defaultProps = {
    productLink: null,
    nameLink: null,
    img: null,
    name: null,
    oldPrice: false,
  };
  render() {
    const {
      productLink,
      img,
      nameLink,
      name,
      oldPrice,
    } = this.props;
    return (
      <ItemCard>
        <CardImage href={productLink} >
          <Image alt="product" src={img} />
        </CardImage>
        <CardBody>
          <CardTitle>
            <TitleSp>Accessories</TitleSp>
            <TitleLink href={nameLink}>{name}</TitleLink>
          </CardTitle>
          <CardPrice>
            <StrikeTroughItem oldPrice={oldPrice}>$699.99</StrikeTroughItem>
            <StrikeTroughItem>$649.99</StrikeTroughItem>
          </CardPrice>
        </CardBody>
      </ItemCard>
    );
  }
}

export default Product;
