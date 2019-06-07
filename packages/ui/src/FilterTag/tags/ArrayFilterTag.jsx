import React, { Component } from 'react';
import Join from '../../Join';
import BaseFilterTag from './BaseFilterTag';

class ArrayFilterTag extends Component { //eslint-disable-line
  render() {
    const { name, title, getValue, value, ...props } = this.props;
    if (!Array.isArray(value)) return null;
    const items = value.map(getValue);
    return (
      <BaseFilterTag {...props}>
        {title}
        {': '}
        <Join items={items} glue=", " />
      </BaseFilterTag>
    );
  }
}

export default ArrayFilterTag;
