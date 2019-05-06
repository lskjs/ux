import React, { Component } from 'react';
import autobind from '@lskjs/autobind';
import { inject, observer } from 'mobx-react';
import Join from '../../Join';
import BaseFilterTag from './BaseFilterTag';

@inject('listStore')
@observer
class MoreThanFilterTag extends Component { //eslint-disable-line
  @autobind
  onClose() {
    const { listStore, name, moreThanKey } = this.props;
    listStore.setFilter({
      ...listStore.filter,
      [name]: undefined,
      [moreThanKey]: undefined,
    });
  }
  render() {
    const {
      moreThan,
      value,
      title,
    } = this.props;
    const val = [value];
    if (moreThan) val.push(moreThan);
    return (
      <BaseFilterTag onClose={this.onClose} {...this.props}>
        {`${title}: `}
        <Join items={val} glue=", " />
      </BaseFilterTag>
    );
  }
}

export default MoreThanFilterTag;
