import React, { PropTypes } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import get from 'lodash/get';
import set from 'lodash/set';

export default class Component extends React.Component {
  static contextTypes = {
    history: PropTypes.object,
  };

  setStateAsync(state) {
    return new Promise(resolve => this.setState(state, resolve));
  }

  getStatePath(path) {
    return get(this.state, path);
  }

  setStatePath(path, value) {
    const state = cloneDeep(this.state);
    set(state, path, value);
    return this.setStateAsync(state);
  }

  redirect(...args) {
    this.context.history.push(...args);
  }


}
