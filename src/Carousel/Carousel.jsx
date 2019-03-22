

import React, { Component } from 'react';
import Slider from 'react-slick';
import autobind from 'core-decorators/lib/autobind';
import { Container, ButtonRight } from './Carousel.style';


export default class Carousel extends Component {
  @autobind
  next() {
    this.slider.slickNext();
  }
  render() {
    const { children } = this.props;
    const settings = {
      dots: false,
      speed: 2000,
      arrows: false,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1418,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1081,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 853,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Container>
        <Slider {...settings} ref={(arg) => { this.slider = arg; }}>
          {children}
        </Slider>
        <ButtonRight onClick={this.next}>
          Next
        </ButtonRight>
      </Container>
    );
  }
}
