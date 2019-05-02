import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import {
  Container,
  ButtonRight,
  ButtonLeft,
  ArrowLeft,
  ArrowRight,
  Wrapper,
  ItemSlider,
} from './Carousel.style';


const DefaultItemComponent = ({ src, title }) => (
  <img src={src} alt={title} />
);

const normalizeItems = (items = []) => (
  items.map((item) => {
    if (typeof item === 'string') return { src: item };
    const { url, ...other } = item;
    return { src: url, ...other };
  })
);

class Carousel extends PureComponent {
  static propTypes = {
    slidesToScroll: PropTypes.number,
    itemWidth: PropTypes.number,
    itemHeight: PropTypes.number,
    height: PropTypes.number,
    nextArrow: PropTypes.node,
    prevArrow: PropTypes.node,
    items: PropTypes.array,
  }

  static defaultProps = {
    slidesToScroll: 1,
    height: 205,
    itemWidth: 116,
    itemHeight: 205,
    nextArrow: <ButtonRight><ArrowRight /></ButtonRight>,
    prevArrow: <ButtonLeft><ArrowLeft /></ButtonLeft>,
    items: [],
  }

  render() {
    const {
      slidesToScroll,
      items,
      height,
      nextArrow,
      prevArrow,
      ItemComponent = DefaultItemComponent,
      itemWidth,
      itemHeight,
      ...props
    } = this.props;

    const settings = {
      dots: false,
      speed: 500,
      arrows: true,
      infinite: true,
      initialSlide: 0,
      slidesToScroll,
      variableWidth: true,
      adaptiveHeight: true,
      nextArrow,
      prevArrow,
    };

    return (
      <Container>
        <Slider {...settings} {...props}>
          {normalizeItems(items).map((item, i) => (
            <ItemSlider key={item.key || i}>
              <Wrapper
                itemWidth={itemWidth}
                itemHeight={itemHeight}
              >
                <ItemComponent
                  {...item}
                />
              </Wrapper>
            </ItemSlider>
          ))}
        </Slider>
      </Container>
    );
  }
}

export default Carousel;
