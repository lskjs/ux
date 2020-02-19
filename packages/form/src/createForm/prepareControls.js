import React from 'react';
import forEach from 'lodash/forEach';
import getControlHtmlId from './getControlHtmlId';

export default (ctrls, { FormGroup, withI18 } = {}) => {
  const controls = {};
  forEach(ctrls, (ctrl, name) => {
    const ControlWrapper = ctrl.FormGroup || FormGroup;
    let component;
    if (ControlWrapper) {
      component = ({ formGroupProps: innerFormGroupProps, ...innerProps }) => {
        const formGroupProps = {
          withI18,
          ...(ctrl.formGroupProps || {}),
          ...(innerFormGroupProps || {}),
        };
        const componentProps = {
          ...(ctrl.props || {}),
          ...innerProps,
        };

        return React.createElement(ControlWrapper, formGroupProps, React.createElement(ctrl.component, componentProps));
      };
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

  const get = key => {
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
