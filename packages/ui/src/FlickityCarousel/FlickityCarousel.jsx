import React, { PureComponent } from 'react';
import Button from '@lskjs/button';
import Flickity from 'react-flickity-component';

class FlickityCarousel extends PureComponent {
  myCustomNext = () => {
    // You can use Flickity API
    this.flkty.next();
  }
  myCustomPrev = () => {
    // You can use Flickity API
    this.flkty.prev();
  }
  render() {
    const { children, ...props } = this.props;
    return (
      <div>
        <Flickity
          className="carousel" // default ""
          elementType="div"// default 'div'
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
          pageDots={false}
          flickityRef={c => this.flkty = c}
          {...props}
        >
          {children}
        </Flickity>
        <Button paint="primary" onClick={this.myCustomNext}>Next button</Button>
        <Button paint="danger" onClick={this.myCustomPrev}>Prev button</Button>
      </div>
    );
  }
}

export default FlickityCarousel;
