
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nanobar from 'nanobar';
 
class Progress extends Component {
  nanobar = null;
  state = { value: null, speed: null, global };

  static propTypes = {
    progress: PropTypes.number.isRequired,
    global: PropTypes.bool,
    speed: PropTypes.number,
  };

  constructor() {
    super();
    this.bar = React.createRef();
  }

  componentDidMount() {
    const { value, speed, global } = this.props;

    this.nanobar = new Nanobar({
      target: nano
    });

    this.state.value = value;
    this.state.speed = speed;
    this.nanobar.go(value);

    this.timeout = setInterval(() => {
      const value = this.state.value + speed;
      this.setState({ value });
      this.nanobar.go(value);
    }, 1000);
    global ? this.nanobar.el.style.position = 'fixed' 
    : this.nanobar.el.parentNode.parentNode.style.position = 'relative'
  }

  componentWillReceiveProps({ value }) {
    this.setState({ value });
    this.nanobar.go(value);
  }

  componentWillUnmount() {
    const { el } = this.nanobar;
    el.parentNode.removeChild(el);
    clearInterval(this.timeout);
  }

  render() {
    return (
      <div id="nano" className="nano">
        <span ref={this.bar} />
      </div>
    );
  }
}

export default Progress;