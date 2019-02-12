import React, { Component } from 'react';

class Performance extends Component {
  perf = {};
  componentWillMount() {
    this.perf.componentWillMount = Date.now();
  }
  componentDidMount() {
    this.perf.componentDidMount = Date.now();
    console.log(`Component.mount time ${this.perf.componentDidMount - this.perf.componentWillMount}ms`);
  }
  componentWillUpdate() {
    this.perf.componentWillUpdate = Date.now();
  }
  componentDidUpdate() {
    this.perf.componentDidUpdate = Date.now();
    console.log(`Component.update time ${this.perf.componentDidUpdate - this.perf.componentWillUpdate}ms`);
  }
  render() {
    return this.props.children;
  }
}

export default Performance;
