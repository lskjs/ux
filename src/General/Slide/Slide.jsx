import {Component, PropTypes} from 'react'
import importcss from 'importcss'
import ReactDriveIn from 'react-drive-in'

@importcss(require('./Slide.css'))
export default class Slide extends Component {
  static propTypes = {};

  renderInner() {
    return <div styleName='Slide__inner'>
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

            {/* <SlideInner props={...this.props}/> */}
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
    let { height, width, color, overlay, style } = this.props
    if (!color) {
      color = 'transparent';
    }
    if (this.props.full) {
      if (!height) {
        height = '100vh';
      }
    }
    if (this.props.overlay === true) {
      overlay = 'rgba(0,0,0,0.5)';
    }
    if (this.props.gray) {
      color = 'gray';
    }


    if (!style) {
      style = {};
    }
    if (color) {
      style.backgroundColor = color;
    }
    if (height) {
      style.minHeight = height;
    }
    if (width) {
      style.minWidth = width;
    }

    const rootClass = `Slide ${this.props.fixed ? ' Slide_fixed' : ''}${this.props.center ? ' Slide_center' : ''}`
    return (
      <div styleName={rootClass} style={style}>
        <div styleName="noclick" />
        <If condition={this.props.overlay}>
          <div styleName="overlay" style={{backgroundColor: overlay}} />
        </If>
        <If condition={this.props.video}>
          <div
            styleName="video__wrapper"
          >
            <ReactDriveIn
              show={this.props.video}
            />
          </div>
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
          {/* zindex 99 */}
          <div
            styleName='Slide__bg-image'
            style={{backgroundImage: 'url(' + this.props.image + ')'}}
          />
        </If>
        {this.renderInner()}
      </div>
    )
  }
}
