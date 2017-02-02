import React, { Component, PropTypes } from 'react';
import importcss from 'importcss';
import ReactDriveIn from 'react-drive-in';
import cx from 'classnames';

@importcss(require('./Slide.css'))
export default class Slide extends Component {
  static defaultProps = {
    color: 'transparent',
    overlay: false,
    video: null,
    stretch: false,
    full: false,
    image: null,
    width: null,
    height: null,
    top: null,
    left: null,
    right: null,
    bottom: null,
    content: null,
    children: null,
    className: '',
    style: {},
    fixed: false,
    center: false,
  }
  static propTypes = {
    overlay: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    video: PropTypes.string,
    stretch: PropTypes.bool,
    full: PropTypes.bool,
    color: PropTypes.string,
    image: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    top: PropTypes.any,
    left: PropTypes.any,
    right: PropTypes.any,
    bottom: PropTypes.any,
    content: PropTypes.any,
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
    fixed: PropTypes.bool,
    center: PropTypes.bool,
  };

  renderVideo(video) {
    // https://www.youtube.com/asdasd/asd/asd/watch?v=c-shIOFYCRU
    // https://youtu.be/C8PYHjRj-zk
    // https://www.youtube.com/embed/C8PYHjRj-zk
    // https://youtu.be/c-shIOFYCRU?t=3m26s
    //
    if (video.indexOf('youtube.com') !== -1 || video.indexOf('youtu.be') !== -1) {
      const code = video
        .split('watch?v=').pop()
        .split('/').pop()
        .split('?')[0];
      const playlist = `https://www.youtube.com/embed/${code}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${code}`;
      return (
        <div styleName="Slide__video Slide__video_youtube">
          <div styleName="Slide__videoForeground">
            <iframe
              styleName="video"
              frameBorder="0"
              allowFullScreen="1"
              width="640"
              height="360"
              src={playlist}
            />
          </div>
        </div>
      );
    }
    return (
      <div styleName="Slide__video">
        <ReactDriveIn
          show={video}
        />
      </div>
    );
  }
  renderBg() {
    let { overlay } = this.props;
    const { video, image } = this.props;
    if (overlay === true) {
      overlay = 'rgba(0,0,0,0.5)';
    }

    return (<div styleName="Slide__bg">
      <div styleName="Slide__noclick" />
      <If condition={this.props.overlay}>
        <div styleName="Slide__overlay" style={{ backgroundColor: overlay }} />
      </If>
      <If condition={video}>
        {this.renderVideo(video)}
      </If>
      {/* <If condition={this.props.video}>
        <ReactDriveIn
         show={this.props.video}
        />
      </If> */}
      {/* <If condition={this.props.video}>
        <div
          styleName="video__wrapper"
        >
          <iframe
            styleName="video"
            frameborder="0"
            allowfullscreen="1"
            title="YouTube video player"
            width="640"
            height="360"
            src={this.props.video}
          />
        </div>
      </If> */}
      <If condition={image}>
        <div
          styleName="Slide__image"
          style={{ backgroundImage: `url(${image})` }}
        />
      </If>
    </div>);
  }
  renderInner() {
    let { height } = this.props;
    const { width, top, left, right, bottom, content, children, full } = this.props;
    const style = {};
    if (full && !height) {
      height = '100vh';
    }
    if (height) {
      style.minHeight = height;
    }
    if (width) {
      style.minWidth = width;
    }
    return (
      <div styleName="Slide__inner" style={style}>
        <If condition={top}>
          <div styleName="Slide__top">
            {top}
          </div>
        </If>
        <div styleName="Slide__middle">
          <If condition={left}>
            <div styleName="Slide__left">
              {left}
            </div>
          </If>
          <div styleName="Slide__center">
            <div styleName="Slide__content">
              {content}
              {children}
            </div>
          </div>
          <If condition={right}>
            <div styleName="Slide__right">
              {right}
            </div>
          </If>
        </div>
        <If condition={bottom}>
          <div styleName="Slide__bottom">
            {bottom}
          </div>
        </If>
      </div>
    );
  }
  render() {
    const { style, color, className, fixed, center, stretch } = this.props;
    style.backgroundColor = color;
    return (
      <div
        styleName={cx({
          Slide: true,
          Slide_stretch: stretch,
          Slide_fixed: fixed,
          Slide_center: center,
        })}
        className={className}
        style={style}
      >
        {this.renderBg()}
        {this.renderInner()}
      </div>
    );
  }
}
