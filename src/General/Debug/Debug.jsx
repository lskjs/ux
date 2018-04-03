import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Debug extends PureComponent {
  static defaultProps = {
    children: null,
  }
  static propTypes = {
    children: PropTypes.any,
  }
  render() {
    if (!__DEV__) return null;
    if (this.props.children) {
      return <div style={{ border: '1px dotted red' }}>{this.props.children}</div>;
    }
    return <pre style={{ border: '1px dotted red' }}>{JSON.stringify(this.props)}</pre>;
  }
}
