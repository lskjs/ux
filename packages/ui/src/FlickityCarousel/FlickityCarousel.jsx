import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@lskjs/button';
import Flickity from 'react-flickity-component';
import { prevButton, flickityStyle } from './FlickityCarousel.style';
import CarouselButton from './assets/carousel-go';

const flickityOptions = {
  initialIndex: 0,
  pageDots: false,
  prevNextButtons: false,
  cellAlign: 'left',
  contain: true,
};

class FlickityCarousel extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
  }
  static defaultProps = {
    children: null,
  }
  constructor(props) {
    super(props);
    this.flkty = React.createRef();
  }
  myCustomNext = () => {
    this.flkty.next();
  }
  myCustomPrevious = () => {
    this.flkty.previous();
  }
  render() {
    const { children, ...props } = this.props;
    return (
      <div>
        <Flickity
          // className="carousel" // default ""
          elementType="div"// default 'div'
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          options={flickityOptions}
          static // default false
          flickityRef={c => this.flkty = c}
          className={flickityStyle}
          {...props}
        >
          {children}
        </Flickity>
        <Button paint="primary" className={prevButton} icon={<CarouselButton />} onClick={this.myCustomPrevious} />
        <Button paint="primary" icon={<CarouselButton />} onClick={this.myCustomNext} />
      </div>
    );
  }
}

export default FlickityCarousel;
