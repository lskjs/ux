import React, { PropTypes } from 'react';
import Component from 'lsk-general/General/Component';
import _ from 'lodash';
import ReactImageFallback from 'react-image-fallback';
import Link from '../Link';

// import gifSpinner from './img/loading.gif';
const textSizeRatio = 3;

export default class Avatar extends Component {
  static defaultAvatar = '//cdn.mgbeta.ru/lsk/no-avatar.png';
  static defaultProps = {
    title: '',
    name: '',
    src: null,

    size: 64,
    width: null,
    height: null,

    backgroundColor: '#838383',
    textColor: '#d9d9d9',
    textScale: 1,

    placeholder: null,
    placeholderLimit: 3,

    shape: 'circle',

    style: {},
    innerStyle: {},
  }

  static propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,

    size: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,

    color: PropTypes.string,
    textColor: PropTypes.string,
    textScale: PropTypes.number,

    shape: PropTypes.string,

    placeholder: PropTypes.string,
    placeholderLimit: PropTypes.number,
    // shape: PropTypes.oneOfType(['circle', 'square', 'rounded']),

    style: PropTypes.object,
    innerStyle: PropTypes.object,
  };

  getInnerStyle() {
    const {
      size,
      textScale,
      shape,
      backgroundColor,
      innerStyle,
      textColor,
    } = this.props;

    const width = this.props.width || size;
    const height = this.props.height || size;

    const lineHeight = size;
    const fontSize = Math.min(
      Math.floor(size / textSizeRatio * textScale),
      lineHeight,
    );

    let borderRadius = 'none';
    if (shape === 'circle') {
      borderRadius = '50%';
    } else if (shape === 'rounded') {
      borderRadius = 6;
    }

    return Object.assign({
      boxSizing: 'border-box',
      maxWidth: '100%',
      objectFit: 'cover',
      // overflow: 'hidden',
      width,
      height,
      textAlign: 'center',
      fontFamily: 'Helvetica, Arial, sans-serif',
      borderRadius,
      fontSize: `${fontSize}px`,
      lineHeight: `${lineHeight}px`,
      backgroundColor,
      color: textColor,
    }, innerStyle);
  }

  renderAsImage() {
    const title = this.props.title || this.props.name;
    const src = this.props.src || this.props.avatar;
    return (
      <ReactImageFallback
        src={src}
        fallbackImage={this.constructor.defaultAvatar}
        initialImage={this.constructor.defaultAvatar}
        style={this.getInnerStyle()}
        alt={title}
        title={title}
      />
    );
  }

  renderAsText() {
    let { placeholder, placeholderLimit } = this.props
    const title = this.props.title || this.props.name || placeholder || '';
    if (!placeholder) {
      placeholder = title
        .split(' ')
        .map(s => s.charAt(0))
        .join('')
        .substr(0, placeholderLimit);
    }
    return (
      <div
        style={this.getInnerStyle()}
        // alt={title}
        // title={title}
      >
        {placeholder}
      </div>
    );
  }

  render() {
    const {
      size,
      style,
      className,
      children,
      componentClass,
    } = this.props;

    const src = this.props.src || this.props.avatar;
    const width = this.props.width || size;
    const height = this.props.height || size;

    const wrapperStyle = Object.assign({
      display: 'inline-block',
      position: 'relative',
      width,
      height,
    }, style);

    const link = this.props.link || this.props.href;
    const Component = componentClass || (link ? Link : 'div')

    return (
      <Component
        href={link}
        className={className}
        style={wrapperStyle}
      >
        {src != null ? this.renderAsImage() : this.renderAsText()}
        { children }
      </Component>
    );
  }
}

Avatar.Badge = function (props) {
  const offset = '7%';
  const style = {
    position: 'absolute',
  };
  const Wrap = props.componentClass;

  ['left', 'top', 'right', 'bottom'].forEach((dir) => {
    if (!props[dir]) return;
    if (typeof props[dir] === 'string') {
      style[dir] = props[dir];
    } else if (typeof props[dir] === 'number') {
      style[dir] = props[dir] + '%';
    } else {
      style[dir] = offset;
    }
  });

  return (
    <div style={style}>
      {props.children}
    </div>
  );
};
