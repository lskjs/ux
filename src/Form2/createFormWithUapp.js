import React, { Component } from 'react';
import isFunction from 'lodash/isFunction';
import { inject, observer } from 'mobx-react';
import createForm from './createForm';

const createFormWithUapp = (callback) => {
  if (!isFunction(callback)) {
    return createForm(callback);
  }

  @inject('uapp')
  @observer
  class Component2 extends Component {
    render() {
      const { uapp } = this.props;
      const params = callback(uapp);
      const Component3 = createForm(params);
      return <Component3 />;
    }
  }

  return Component2;
};

export default createFormWithUapp;
