import React, { PropTypes } from 'react';
// import Link from '../Link';
import _ from 'lodash';

export default class Component extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  //
  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  redirect(...args) {
    this.context.history.push(...args);
  }

  getStatePath(path) {
    return _.get(this.state, path);
  }

  setStatePath(path, value) {
    const state = _.cloneDeep(this.state);
    _.set(state, path, value);
    this.setState(state);
  }
}
