import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import filterProps from '@lskjs/utils/filterProps';
import Sticky from '@lskjs/ui/Sticky';

@inject('listStore')
@observer
class ListSticky extends Component {
  static propTypes = {
    children: PropTypes.any,
    offset: PropTypes.number,
  }

  static defaultProps = {
    children: null,
    offset: 0,
  }

  render() {
    const { children, offset, ...props } = this.props;
    return (
      <Sticky offset={offset} {...filterProps(props)}>
        {children}
      </Sticky>
    );
  }
}

export default ListSticky;
