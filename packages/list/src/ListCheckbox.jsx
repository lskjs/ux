import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Checkbox from 'antd/lib/checkbox';

@inject('selectStore')
@observer
class ListCheckbox extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { selectStore, item, global } = this.props;
    if (global) {
      selectStore.globalToggle();
    } else {
      selectStore.toggle(item);
    }
  }
  render() {
    const { selectStore, item, global } = this.props;
    return (
      <Checkbox
        indeterminate={global && selectStore.globalIsIndeterminate()}
        checked={global ? selectStore.globalIsChecked() : selectStore.isChecked(item)}
        onClick={this.handleClick}
        style={{ marginBottom: 1 }}
      />
    );
  }
}

export default ListCheckbox;
