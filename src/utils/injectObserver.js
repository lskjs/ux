
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import pick from 'lodash/pick';

export default fields => (createComponent) => {
  @inject([...fields])
  @observer
  class Component2 extends Component {
    shouldComponentUpdate(nextProps) {
      return !!(nextProps.hash && this.props.hash && nextProps.hash !== this.props.hash);
    }
    render() {
      const props = pick(this.props, fields);
      return React.createComponent(createComponent(props), props);
    }
  }

  return Component2;
};

