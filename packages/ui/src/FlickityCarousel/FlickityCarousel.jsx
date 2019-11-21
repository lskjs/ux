import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autobind from '@lskjs/autobind';
import Button from '@lskjs/button';
import Flickity from 'react-flickity-component';
import { flickityStyle, Wrapper, Control, shadowStyle, ButtonsWrapper } from './FlickityCarousel.styles';
import CarouselButton from './assets/carousel-go';

const flickityOptions = {
  // initialIndex: 0,
  pageDots: false,
  prevNextButtons: false,
  cellAlign: 'left',
  contain: true,
};

class FlickityCarousel extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    vertical: PropTypes.number,
  }
  static defaultProps = {
    children: null,
    vertical: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      canPrev: false,
      canNext: false,
    };
    this.flkty = React.createRef();
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.stateManager();
      this.flkty.on('change', () => {
        this.stateManager();
      });
    }
  }
  @autobind
  myCustomNext() {
    this.flkty.next();
  }
  @autobind
  myCustomPrevious() {
    this.flkty.previous();
  }

  @autobind
  stateManager() {
    const { target } = this.flkty.selectedSlide;
    if (target === 0) {
      this.setState({
        canPrev: false,
      });
    } else {
      this.setState({
        canPrev: true,
      });
    }
    if (target === this.flkty.slidesWidth) {
      this.setState({
        canNext: false,
      });
    } else {
      this.setState({
        canNext: true,
      });
    }
  }

  render() {
    const { canNext, canPrev } = this.state;
    const { children, instanceProps = {}, rightToLeft, options, vertical, ...props } = this.props;
    return (
      <Wrapper {...props}>
        <Flickity
          disableImagesLoaded={false}
          options={{
            ...flickityOptions,
            ...options,
          }}
          static
          className={flickityStyle}
          {...instanceProps}
          flickityRef={(c) => {
            this.flkty = c;
          }}
        >
          {children}
        </Flickity>
        <Control position="left" visible={canPrev} vertical={vertical}>
          <Button
            className={shadowStyle}
            disabled={!canPrev}
            icon={<CarouselButton />}
            onClick={this.myCustomPrevious}
          />
        </Control>
        <Control position="right" visible={canNext} vertical={vertical}>
          <Button
            className={shadowStyle}
            disabled={!canNext}
            icon={<CarouselButton />}
            onClick={this.myCustomNext}
          />
        </Control>
      </Wrapper>
    );
  }
}

export default FlickityCarousel;
