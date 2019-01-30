import React, { Component } from 'react';
import isFunction from 'lodash/isFunction';
import { inject, observer } from 'mobx-react';
import createForm from './createForm';

const createFormWithI18 = (callback) => {
  if (!isFunction(callback)) {
    return createForm(callback);
  }

  @inject('i18', 'config')
  @observer
  class Component2 extends Component {
    render() {
      const { i18, config } = this.props;
      const params = callback({ i18, config });
      const Component3 = createForm(params);
      return <Component3 />;
    }
  }

  return Component2;
};

export default createFormWithI18;
