import React, { Component } from 'react';

class ListSticky extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default ListSticky;
