import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Block from './Page.styles';

export default class Page extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };
  render() {
    return (
      <Block>
        {this.props.children}
      </Block>
    );
  }
}
