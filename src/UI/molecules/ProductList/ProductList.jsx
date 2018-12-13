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
  TitleLink,
  TitleSpan,
  Image,
} from './ProductList.styles';

class ProductList extends PureComponent {
  static propTypes = {
    imageLink: PropTypes.string,
    titleLink: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    oldPrice: PropTypes.bool,
  };
  static defaultProps = {
    imageLink: null,
    titleLink: null,
    img: null,
    name: null,
    oldPrice: false,
  };
  render() {
    const {
      imageLink,
      titleLink,
      img,
      name,
      oldPrice,
    } = this.props;
    return (
      <ItemCard>
        <CardImage href={imageLink}>
          <Image alt="product" src={img} />
        </CardImage>
        <CardBody>
          <CardTitle>
            <TitleLink href={titleLink}>{name}</TitleLink>
            <TitleSpan>Accessories</TitleSpan>
          </CardTitle>
          <CardPrice>
            <StrikeThroughItem isPierced={oldPrice}>$699.99</StrikeThroughItem>
            <StrikeThroughItem>$649.99</StrikeThroughItem>
          </CardPrice>
          <Divider />
          <CardDesc>From the way it works to the way it looks, Watch isn’t just something you wear. It’s an essential part of who you are.</CardDesc>
        </CardBody>
      </ItemCard>
    );
  }
}
export default ProductList;
