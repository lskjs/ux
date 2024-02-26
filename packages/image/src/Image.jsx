import Link from '@lskjs/link';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ReactImageFallback from 'react-image-fallback';
// import Img from './Image.styles';

// const textSizeRatio = 3;
const textSizePercent = 30;

export class Image extends PureComponent {
  getInnerStyle() {
    const {
      size,
      // textScale,
      innerStyle,
      textColor,
      objectFit,
      // src,
    } = this.props;

    const width = this.props.width || size;
    const height = this.props.height || size;

    const lineHeight = size;
    const fontSize = Math.min(
      // Math.floor(size / textSizeRatio * textScale),
      Math.floor((size * textSizePercent) / 100),
      lineHeight,
    );

    return {
      boxSizing: 'border-box',
      maxWidth: '100%',
      maxHeight: 500,
      objectFit,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // overflow: 'hidden',
      width,
      height,
      textAlign: 'center',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontSize: `${fontSize}px`,
      lineHeight: `${lineHeight}px`,
      color: textColor,
      ...innerStyle,
    };
  }

  renderAsImage() {
    const title = this.props.title || this.props.name;
    const src = this.props.src || this.props.image;
    const { style = {}, ...props } = this.props;

    return (
      <ReactImageFallback
        src={src}
        fallbackImage={this.constructor.defaultImage}
        initialImage={this.constructor.defaultImage}
        style={{
          ...this.getInnerStyle(),
          ...style,
        }}
        alt={title}
        title={title}
        {...props}
      />
    );
  }

  renderAsText() {
    let { placeholder } = this.props;
    const { placeholderLimit } = this.props;
    const title = this.props.title || this.props.name || placeholder || '';
    if (!placeholder) {
      placeholder = title
        .split(' ')
        .map((s) => s.charAt(0))
        .join('')
        .substr(0, placeholderLimit);
    }
    return <div style={this.getInnerStyle()}>{placeholder}</div>;
  }

  render() {
    const { size, style, className, children, componentClass } = this.props;

    // const src = this.props.src || this.props.image;
    const width = this.props.width || size;
    const height = this.props.height || size;

    const wrapperStyle = { display: 'block', position: 'relative', width, height, ...style };

    const link = this.props.link || this.props.href;
    const Component = componentClass || (link ? Link : 'div');

    return (
      <Component href={link} className={className} style={wrapperStyle}>
        {this.renderAsImage()}
        {children}
      </Component>
    );
  }
}

Image.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.number,
  objectFit: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // color: PropTypes.string,
  textColor: PropTypes.string,
  // textScale: PropTypes.number,

  placeholder: PropTypes.string,
  placeholderLimit: PropTypes.number,

  style: PropTypes.object,
  innerStyle: PropTypes.object,
};
Image.defaultImage = 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png';
Image.defaultProps = {
  title: '',
  name: '',
  src: null,

  size: 64,
  width: 'auto',
  height: 'auto',
  objectFit: 'cover',

  // backgroundColor: '#838383',
  textColor: 'var(--colors-gray, #d9d9d9)',
  // textScale: 1,

  placeholder: null,
  placeholderLimit: 3,

  style: {},
  innerStyle: {},
};

export default Image;
