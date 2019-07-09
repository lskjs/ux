import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LinkProvider extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  static childContextTypes = {
    linkProvider: PropTypes.object.isRequired,
  };

  getChildContext() {
    const { onClick } = this.props;
    return { linkProvider: { qwe: 123, onClick } };
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default LinkProvider;
