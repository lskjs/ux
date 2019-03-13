
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nanobar from 'nanobar';
import get from 'lodash/get';
import { withTheme } from 'emotion-theming';

@withTheme
class Progress extends Component {
<<<<<<< HEAD
  static propTypes = {
    global: PropTypes.bool,
    speed: PropTypes.number,
    value: PropTypes.number,
    height: PropTypes.number,
    // color: PropTypes.string,
    isLoading: PropTypes.bool,
  };

=======
>>>>>>> 3ee0984b3b5cada889d94c4b2e7dd0bdde40b6c7
  static defaultProps = {
    isLoading: false,
    global: false,
    speed: 2,
    height: 2,
    value: null,
    // shadow: true,
    // color: null,
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

<<<<<<< HEAD

  bar = React.createRef();
  handleEvent = () => {
    console.log('sdsd');
    this.nanobar.el.children[0].style.cssText =
    `height: 200px;
    background-color: red;`;
  }
  int() {
    const { global, isLoading, speed } = this.props;
    this.styleSetting();
    this.nanobar.go(this.state.valueProgress);
    this.nanobar.el.style.cssText = 'position: absolute; left: 0; top: 0;  z-index: 1;';
=======
    this.styleSetting();
    this.nanobar.go(this.state.valueProgress);
    this.nanobar.el.style.cssText = 'position: absolute; left: 0; top: 0; z-index: 1;';
>>>>>>> 3ee0984b3b5cada889d94c4b2e7dd0bdde40b6c7
    this.timeout = setInterval(() => {
      this.styleSetting();
      if (isLoading) { this.setState({ valueProgress: this.state.valueProgress + speed }); }
      this.nanobar.go(this.state.valueProgress);
    }, 1000);
<<<<<<< HEAD
    if (global) { this.nanobar.el.style.cssText = 'position: fixed; left: 0; top: 0; z-index: 1;'; }
=======
    if (global) { this.nanobar.el.style.cssText = 'position: fixed; left: 0; top: 0;'; }
  }


  componentWillUnmount() {
    const { el } = this.nanobar;
    el.parentNode.removeChild(el);
    clearInterval(this.timeout);
>>>>>>> 3ee0984b3b5cada889d94c4b2e7dd0bdde40b6c7
  }

  bar = React.createRef();
  styleSetting() {
    const { theme } = this.props;
    const { color = get(theme, 'colors.primary', '#1890ff'), shadow } = this.props;
    // console.log({color});

<<<<<<< HEAD
    this.nanobar.el.children[0].style.cssText =
    `height: ${this.props.height}px;
    ${shadow ? `box-shadow: 0 0 12px ${color}, 0 0 5px ${color};` : ''}
    overflow: hidden;
    max-width: 100%; 
    position: absolute !important;
    background-color: ${color};
    top: 0;
    left: 0;`;
=======
    this.nanobar.el.children[0].style.cssText = `height: ${this.props.height}px;
                                                 background: black;
                                                 ${shadow ? `box-shadow: 0 0 12px ${color}, 0 0 5px ${color};` : ''}
                                                 overflow: hidden;
                                                 max-width: 100%; 
                                                 position: absolute !important;
                                                 background-color: ${color};
                                                 top: 0;
                                                 left: 0;`;
>>>>>>> 3ee0984b3b5cada889d94c4b2e7dd0bdde40b6c7
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