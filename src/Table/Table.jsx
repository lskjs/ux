import React, { Component } from 'react';
import { Provider } from 'mobx-react';

class GridTable extends Component {  //eslint-disable-line
  render() {
    const { columns, overflow, children } = this.props;
    return (
      <Provider columns={columns} overflow={overflow}>
        <React.Fragment>
          {children}
        </React.Fragment>
      </Provider>
    );
  }
}

export default GridTable;
