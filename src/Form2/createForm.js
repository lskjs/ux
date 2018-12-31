import React from 'react';
import forEach from 'lodash/forEach';
import set from 'lodash/set';
import pickBy from 'lodash/pickBy';
import isFunction from 'lodash/isFunction';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import { withFormik } from 'formik';
import validate from 'validate.js';
import Promise from 'bluebird';

const createForm = ({
  controls: rawControls,
  view: View,
  displayName,
  FormGroup,
}) => {
  const prepareControls = (ctrls) => {
    const prepared = {};
    forEach(ctrls, (ctrl, name) => {
      const ControlWrapper = ctrl.FormGroup || FormGroup;
      let component;
      if (ControlWrapper) {
        component = props => {
          console.log('component', props);
          
          return React.createElement(
            ControlWrapper,
            props,
            React.createElement(ctrl.component, props),
          );
        }
      } else {
        ({ component } = ctrl);
      }

      prepared[name] = {
        name,
        ...ctrl,
        component,
      };
    });
    return prepared;
  };
  const controls = prepareControls(rawControls);

  const staticProps = {
    controls,
  };

  const WrappedView = props => React.createElement(View, { ...staticProps, ...props });

  return withFormik({
    mapPropsToValues() {
      const defaultValues = {};
      Object.keys(rawControls).forEach((key) => {
        set(defaultValues, key, rawControls[key].default);
      });
      return defaultValues;
    },
    handleSubmit: (values, { /* setSubmitting , */ props }) => {
      const { onSubmit } = props;
      onSubmit(values);
    },
    handleChange: (values, { /* setSubmitting, */ props/* , form  */ }) => {
      const { onChange } = props;
      onChange(values);
    },
    getValidators: (ctrls) => {
      const validators = {};
      let customValidators = [];
      forEach(ctrls, (value, key) => {
        validators[key] = pickBy(value.validator, (validator) => {
          return !isFunction(validator);
        });

        const custom = pickBy(value.validator, isFunction);
        if (!isEmpty(custom)) {
          customValidators = [
            ...customValidators,
            ...map(custom, (validator) => {
              return {
                name: key,
                validator,
              };
            }),
          ];
        }
      });
      return {
        validators,
        customValidators,
      };
    },
    async validate(values) {
      const errors = {};

      const {
        validators,
        customValidators,
      } = this.getValidators(controls);

      // validate by validate.js
      try {
        await validate.async(values, validators, { fullMessages: false });
      } catch (err) {
        forEach(err, (error, name) => {
          errors[name] = error?.[0];
        });
      }
      // validate by custom functions
      await Promise.map(customValidators, async ({ name, validator }) => {
        try {
          const message = await validator(values[name], values);
          if (message) {
            errors[name] = typeof message === 'string' ? message : 'The Error';
          }
        } catch (err) {
          if (typeof err === 'string') errors[name] = err;
          if (typeof err.message === 'string') errors[name] = err.message;
        }
      });

      // throw if errors
      if (!isEmpty(errors)) throw errors;
    },
    validateOnChange: false,
    validateOnBlur: false,
    displayName: displayName || 'Form',
  })(WrappedView);
};

export default createForm;
