import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autobind from '@lskjs/autobind';
import Button from '@lskjs/button';
import Flickity from 'react-flickity-component';
import { Wrapper, Control } from './FlickityCarousel.styles';
import CarouselButton from './assets/carousel-go';

const flickityOptions = {
  // initialIndex: 0,
  pageDots: false,
  prevNextButtons: false,
  cellAlign: 'left',
  contain: true,
};

class FlickityCarousel extends PureComponent {
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
          {...instanceProps}
          // css={flickityStyle}
          flickityRef={c => {
            this.flkty = c;
          }}
        >
          {children}
        </Flickity>
        <Control position="left" visible={canPrev} vertical={vertical}>
          <Button
            style={{
              boxShadow: '0 -6px 8px -2px rgba(0, 0, 0, 0.16)',
            }}
            disabled={!canPrev}
            icon={<CarouselButton />}
            onClick={this.myCustomPrevious}
          />
        </Control>
        <Control position="right" visible={canNext} vertical={vertical}>
          <Button
            style={{
              boxShadow: '0 6px 8px -2px rgba(0, 0, 0, 0.16)',
            }}
            disabled={!canNext}
            icon={<CarouselButton />}
            onClick={this.myCustomNext}
          />
        </Control>
      </Wrapper>
    );
  }
}

FlickityCarousel.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  vertical: PropTypes.number,
};
FlickityCarousel.defaultProps = {
  children: null,
  vertical: null,
};

export default FlickityCarousel;
