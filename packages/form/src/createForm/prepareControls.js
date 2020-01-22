import React from 'react';
import forEach from 'lodash/forEach';
import getControlHtmlId from './getControlHtmlId';

export default (ctrls, FormGroup) => {
  const controls = {};
  forEach(ctrls, (ctrl, name) => {
    const ControlWrapper = ctrl.FormGroup || FormGroup;
    let component;
    if (ControlWrapper) {
      component = props2 => React.createElement(
        ControlWrapper,
        props2,
        React.createElement(ctrl.component, props2),
      );
    } else {
      ({ component } = ctrl);
    }

    const control = {
      name: ctrl.key || name,
      ...ctrl,
      component,
    };

    control.htmlId = getControlHtmlId(control);
    if (!control.validator) control.validator = {};
    if (!control.validator.presence) {
      let looksLikeRequired;
      if (control._required != null) {
        looksLikeRequired = control._required;
      } else {
        looksLikeRequired = control.required;
      }
      control._required = looksLikeRequired;

      if (control.required) {
        control.validator.presence = {
          allowEmpty: false,
        };
        delete control.required;
      }
    }
    if (!control.validator.email && control.type === 'email') {
      control._type = control.type;
      delete control.type;
      control.validator.email = true;
    }
    controls[name] = control;
  });

  const get = (key) => {
    const control = controls[key];
    if (!control) {
      if (__DEV__) {
        return {
          component: () => React.createElement('div', {}, `!control = ${key}`),
        };
      }
      return { component: 'div' };
    }
    return control;
  };

  return {
    controls: {
      ...controls,
      get,
    },
    control: get,
  };
};
