import autobind from '@lskjs/autobind';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

@inject('listStore')
@observer
class BaseFilterTag extends Component {
  @autobind
  onClose() {
    const { listStore, name } = this.props;
    listStore.setFilter({
      ...listStore.filter,
      [name]: undefined,
    });
  }
  render() {
    const { Tag, name, title, value, noTitle, rawValue, ...props } = this.props;
    let { children } = this.props;
    if (!children) {
      const t = title ? [title, ': '] : '';
      children = (
        <React.Fragment>
          {t}
          {value}
        </React.Fragment>
      );
    }
    return (
      <Tag onClose={this.onClose} name={name} {...props}>
        {children}
      </Tag>
    );
  }
}

export default BaseFilterTag;
