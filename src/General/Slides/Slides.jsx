import React, { Component } from 'react';
import PropTypes from 'prop-types';
import importcss from 'importcss';

@importcss(require('./Slides.css'))
export default class Slides extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
