
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nanobar from 'nanobar';

class Progress extends Component {
  static defaultProps = {
    isLoading: false,
    global: false,
    speed: 2,
    height: 2,
    value: null,
    color: '#9e5262',
  }

  static propTypes = {
    global: PropTypes.bool,
    speed: PropTypes.number,
    value: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    isLoading: PropTypes.bool,
  };

  state = { valueProgress: this.props.value };

  componentDidMount() {
    const { global, isLoading } = this.props;
    this.nanobar = new Nanobar({
      target: this.bar.current,
    });

    if (global) { this.nanobar.el.style.position = 'fixed'; }

    this.styleSetting();
    this.nanobar.go(this.state.valueProgress);
    this.nanobar.el.style.cssText = 'position: absolute; left: 0; top: 0;';
    this.timeout = setInterval(() => {
      this.styleSetting();
      if (isLoading) { this.setState({ valueProgress: this.state.valueProgress + this.props.speed }); }
      this.nanobar.go(this.state.valueProgress);
    }, 1000);
    if (global) { this.nanobar.el.style.cssText = 'position: fixed; left: 0; top: 0;'; }
  }


  componentWillUnmount() {
    const { el } = this.nanobar;
    el.parentNode.removeChild(el);
    clearInterval(this.timeout);
  }

  bar = React.createRef();
  styleSetting() {
    this.nanobar.el.children[0].style.cssText = `height: ${this.props.height}px;
                                                 background: black;
                                                 box-shadow: 0 0 12px ${this.props.color}, 0 0 5px ${this.props.color};
                                                 overflow: hidden;
                                                 max-width: 100%; 
                                                 position: absolute !important;
                                                 background-color: ${this.props.color};
                                                 top: 0;
                                                 left: 0;`;
  }

  render() {
    return (
      <div
        id="nano"
        style={{
          position: 'absolute !important',
          top: '0',
          left: '0',
          width: '100%',
        }}
      >
        <span ref={this.bar} />
      </div>
    );
  }
}

export default Progress;
