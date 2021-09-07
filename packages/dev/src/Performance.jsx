/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import Log from '@lskjs/log2';
import { Component } from 'react';

const log = new Log({
  ns: 'perf',
  name: 'Perf',
  level: 'warn',
});

class Performance extends Component {
  perf = {};
  UNSAFE_componentWillMount() {
    const { disabled } = this.props;
    if (disabled) return;
    this.perf.componentWillMount = Date.now();
  }
  componentDidMount() {
    const { disabled, name = 'Component' } = this.props;
    if (disabled) return;
    this.perf.componentDidMount = Date.now();
    log.trace(`[P] ${name}.mount time ${this.perf.componentDidMount - this.perf.componentWillMount}ms`); // eslint-disable-line no-console
  }
  UNSAFE_componentWillUpdate() {
    const { disabled } = this.props;
    if (disabled) return;
    this.perf.componentWillUpdate = Date.now();
  }
  componentDidUpdate() {
    const { disabled, name = 'Component' } = this.props;
    if (disabled) return;
    this.perf.componentDidUpdate = Date.now();
    log.trace(`[P] ${name}.update time ${this.perf.componentDidUpdate - this.perf.componentWillUpdate}ms`); // eslint-disable-line no-console
  }
  render() {
    const { children } = this.props;
    return children;
  }
}

export default Performance;
