import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import importcss from 'importcss';

@importcss(require('./Page.css'))
export default class Page extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };
  render() {
    return (
      <div styleName="Page">
        {this.props.children}
      </div>
    );
  }
}
