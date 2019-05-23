import React, { PureComponent } from 'react';
import ReactImageFallback from 'react-image-fallback';
// import ExifOrientationImg from 'react-exif-orientation-img';
import ExifOrientationImg from './ExifOrientationImg';


export default class Avatar extends PureComponent {
  render() {
    const { ...props } = this.props;
    return (
      <ExifOrientationImg
        {...props}
      />
    );
    // return (
    //   <ReactImageFallback
    //     {...props}
    //   />
    // );
  }
}
