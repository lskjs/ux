/** @jsx jsx */
import React, { PureComponent } from 'react';
import { jsx } from '@emotion/core';
import isEqual from 'lodash/isEqual';
import { Provider } from 'mobx-react';

class GridTable extends PureComponent {  //eslint-disable-line
  constructor(props) {
    super();
    this.columns = props.columns;
  }
  componentDidUpdate() {
    if (!isEqual(this.columns, this.props.columns)) {
      this.columns = this.props.columns;
    }
  }
  render() {
    const { overflow, children } = this.props;
    return (
      <Provider columns={this.columns} overflow={overflow}>
        <>
          {children}
        </>
      </Provider>
    );
  }
}

export default GridTable;
