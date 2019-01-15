import React, { Component } from 'react';
import { Provider } from 'mobx-react';

class GridTable extends Component {  //eslint-disable-line
  render() {
    const { columns, children } = this.props;
    return (
      <Provider columns={columns}>
        <div>
          {children}
        </div>
      </Provider>
    );
  }
}

export default GridTable;
