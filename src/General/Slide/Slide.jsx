import { Component, PropTypes } from 'react'
import importcss from 'importcss'
import ReactDriveIn from 'react-drive-in'

@importcss(require('./Slide.css'))
export default class Slide extends Component {
  static propTypes = {};

  renderVideo(video) {

    // https://www.youtube.com/asdasd/asd/asd/watch?v=c-shIOFYCRU
    // https://youtu.be/C8PYHjRj-zk
    // https://www.youtube.com/embed/C8PYHjRj-zk
    // https://youtu.be/c-shIOFYCRU?t=3m26s
    //

    if (video.indexOf('youtube.com') !== -1 || video.indexOf('youtu.be') !== -1) {
      const code = video.split('watch?v=').pop().split('/').pop().split('?')[0]
      const playlist = `https://www.youtube.com/embed/${code}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${code}`
      return <div styleName='Slide__video Slide__video_youtube'>
        <div styleName='Slide__videoForeground'>
          <iframe
            styleName='video'
            frameBorder='0'
            allowFullScreen='1'
            width='640'
            height='360'
            src={playlist}
          />
        </div>
      </div>
    }
    return <div styleName='Slide__video'>
      <ReactDriveIn
        show={video}
      />
    </div>
  }
  renderBg() {
    let { color, overlay } = this.props
    if (!color) {
      color = 'transparent';
    }
    if (this.props.overlay === true) {
      overlay = 'rgba(0,0,0,0.5)';
    }

    return <div styleName="Slide__bg">
      <div styleName="Slide__noclick" />
      <If condition={this.props.overlay}>
        <div styleName="Slide__overlay" style={{backgroundColor: overlay}} />
      </If>
      <If condition={this.props.video}>
        {this.renderVideo(this.props.video)}
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
      <If condition={this.props.image}>
        <div
          styleName='Slide__image'
          style={{backgroundImage: 'url(' + this.props.image + ')'}}
        />
      </If>
    </div>
  }
  renderInner() {
    let { width, height } = this.props
    const style = {}
    if (this.props.full && !height) {
      height = '100vh';
    }
    if (height) {
      style.minHeight = height;
    }
    if (width) {
      style.minWidth = width;
    }

    return <div styleName='Slide__inner' style={style}>
      <If condition={this.props.top}>
        <div styleName="Slide__top">
          {this.props.top}
        </div>
      </If>
      <div styleName="Slide__middle">
        <If condition={this.props.left}>
          <div styleName="Slide__left">
            {this.props.left}
          </div>
        </If>
        <div styleName="Slide__center">
          <div styleName="Slide__content">
            {this.props.content}
            {this.props.children}
          </div>
        </div>
        <If condition={this.props.right}>
          <div styleName="Slide__right">
            {this.props.right}
          </div>
        </If>
      </div>
      <If condition={this.props.bottom}>
        <div styleName="Slide__bottom">
          {this.props.bottom}
        </div>
      </If>
    </div>
  }
  render() {
    let { color, style, className } = this.props



    if (!style) {
      style = {};
    }
    if (!color) {
      color = 'transparent';
    }
    style.backgroundColor = color;

    const rootClass = `Slide ${this.props.fixed ? ' Slide_fixed' : ''}${this.props.center ? ' Slide_center' : ''}`
    return (
      <div styleName={rootClass} style={style} className={className}>
        {this.renderBg()}
        {this.renderInner()}
      </div>
    )
  }
}
