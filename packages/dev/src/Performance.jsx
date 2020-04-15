import { Component } from 'react';

class Performance extends Component {
  perf = {};
  componentWillMount() {
    const { disabled } = this.props;
    if (disabled) return;
    this.perf.componentWillMount = Date.now();
  }
  componentDidMount() {
    const { disabled, name = 'Component' } = this.props;
    if (disabled) return;
    this.perf.componentDidMount = Date.now();
    console.log(`[P] ${name}.mount time ${this.perf.componentDidMount - this.perf.componentWillMount}ms`); // eslint-disable-line no-console
  }
  componentWillUpdate() {
    const { disabled } = this.props;
    if (disabled) return;
    this.perf.componentWillUpdate = Date.now();
  }
  componentDidUpdate() {
    const { disabled, name = 'Component' } = this.props;
    if (disabled) return;
    this.perf.componentDidUpdate = Date.now();
    console.log(`[P] ${name}.update time ${this.perf.componentDidUpdate - this.perf.componentWillUpdate}ms`); // eslint-disable-line no-console
  }
  render() {
    const { children } = this.props;
    return children;
  }
}

export default Performance;
