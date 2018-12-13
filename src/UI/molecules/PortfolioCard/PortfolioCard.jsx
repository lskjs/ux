import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  ImageContainer,
  Image,
  CardInfo,
  CardName,
  CardTag,
} from './PortfolioCard.styled';

class PortfolioCard extends PureComponent {
  static propTypes = {
    link: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    tag: PropTypes.string,
  };
  static defaultProps = {
    link: null,
    img: null,
    position: null,
    name: null,
    tag: null,
  };
  render() {
    const {
      link,
      img,
      position,
      name,
      tag,
    } = this.props;
    return (
      <Card href={link}>
        <ImageContainer>
          <Image src={img} alt="cover"/>
        </ImageContainer>
        <CardInfo position={position}>
          <CardName>{name}</CardName>
          <CardTag>{tag}</CardTag>
        </CardInfo>
      </Card>
    );
  }
}
export default PortfolioCard;
