import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import range from 'lodash/range';
import Lightbox from 'react-image-lightbox';
import {
  Container,
  ButtonRight,
  ButtonLeft,
  ArrowLeft,
  ArrowRight,
  Wrapper,
  ItemSlider,
  globalStylesLightbox,
} from './Carousel.style';

globalStylesLightbox();

const DefaultItemComponent = ({ src, title }) => (
  <img src={src} alt={title} />
);

DefaultItemComponent.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};
DefaultItemComponent.defaultProps = {
  src: null,
  title: null,
};

const normalizeItems = (items = []) => (
  items.map((item) => {
    if (typeof item === 'string') return { src: item };
    const { url, ...other } = item;
    return { src: url, ...other };
  })
);

@observer
class Carousel extends Component {
  static propTypes = {
    slidesToScroll: PropTypes.number,
    itemWidth: PropTypes.number,
    itemHeight: PropTypes.number,
    height: PropTypes.number,
    nextArrow: PropTypes.node,
    prevArrow: PropTypes.node,
    items: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    variableWidth: PropTypes.bool,
    ItemComponent: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    lightBox: PropTypes.bool,
  }

  static defaultProps = {
    slidesToScroll: 1,
    variableWidth: true,
    ItemComponent: DefaultItemComponent,
    height: 205,
    itemWidth: 116,
    itemHeight: 205,
    nextArrow: <ButtonRight><ArrowRight /></ButtonRight>,
    prevArrow: <ButtonLeft><ArrowLeft /></ButtonLeft>,
    items: [],
    lightBox: false,
  }

  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
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
      variableWidth,
      lightBox,
      ...props
    } = this.props;

    const widths = {
      960: 918,
      720: 678,
      540: 498,
    };

    const { isOpen, photoIndex } = this.state;

    const keysWidths = Object.keys(widths);

    const settings = {
      dots: false,
      speed: 500,
      arrows: true,
      infinite: false,
      initialSlide: 0,
      slidesToScroll: variableWidth ? Math.floor(1142 / itemWidth) : slidesToScroll,
      slidesToShow: variableWidth ? Math.floor(1142 / itemWidth) : 1,
      variableWidth: true,
      adaptiveHeight: true,
      nextArrow,
      prevArrow,
      responsive: variableWidth ? range(keysWidths.length).map(e => keysWidths[e]).map(wd => ({
        breakpoint: Number(wd),
        settings: {
          slidesToShow: Math.floor(widths[wd] / itemWidth),
          slidesToScroll: Math.floor(widths[wd] / itemWidth),
        },
      })).reverse() : [],
    };
    return (
      <Container>
        <Slider {...settings} {...props}>
          {normalizeItems(items).map((item, i) => (
            <ItemSlider key={item.key || i}>
              <Wrapper onClick={() => this.setState({ isOpen: true, photoIndex: i })} itemHeight={itemHeight}>
                <ItemComponent
                  itemHeight={itemHeight}
                  {...item}
                />
              </Wrapper>
            </ItemSlider>
          ))}
        </Slider>
        {isOpen && lightBox && (
          <Lightbox
            mainSrc={items[photoIndex].src || items[photoIndex]}
            nextSrc={items[(photoIndex + 1) % items.length].src || items[(photoIndex + 1) % items.length]}
            prevSrc={items[(photoIndex + items.length - 1) % items.length].src
              || items[(photoIndex + items.length - 1) % items.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() => this.setState({
              photoIndex: (photoIndex + items.length - 1) % items.length,
            })}
            onMoveNextRequest={() => this.setState({
              photoIndex: (photoIndex + 1) % items.length,
            })}
          />
        )}
      </Container>
    );
  }
}

export default Carousel;
