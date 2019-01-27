import React from 'react';
import forEach from 'lodash/forEach';
import set from 'lodash/set';
import pickBy from 'lodash/pickBy';
import isFunction from 'lodash/isFunction';
import map from 'lodash/map';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
import isEmpty from 'lodash/isEmpty';
import { withFormik } from 'formik';
import validate from 'validate.js';
import Promise from 'bluebird';
import OnChangeListener from '../Form2/OnChangeListener';

const prepareControls = (ctrls, FormGroup) => {
  const prepared = {};
  forEach(ctrls, (ctrl, name) => {
    const ControlWrapper = ctrl.FormGroup || FormGroup;
    let component;
    if (ControlWrapper) {
      component = (props2) => {
        // console.log('component', props2);
        return React.createElement(
          ControlWrapper,
          props2,
          React.createElement(ctrl.component, props2),
        );
      };
    } else {
      ({ component } = ctrl);
    }

    prepared[name] = {
      name: ctrl.key || name,
      ...ctrl,
      component,
    };
  });
  return prepared;
};

const replaceSymbols = (str, oldSymbol, newSymbol = '') => {
  const re = new RegExp(oldSymbol, 'g');
  return str.replace(re, newSymbol);
};

const avoidNestedFields = (values) => {
  let newValues = {};

  forEach(values, (value, oldKey) => {
    if (oldKey.indexOf('@') !== -1) {
      const newKey = replaceSymbols(oldKey, '@', '.');
      newValues = {
        ...newValues,
        [newKey]: value,
      };
      return;
    }
    newValues[oldKey] = value;
  });
  return newValues;
};


const createForm = ({
  controls: rawControls,
  view: View,
  displayName,
  FormGroup,
  withFormik: rawWithFormik,
  ...otherProps
}) => {
  const controls = prepareControls(rawControls, FormGroup);
  const staticProps = {
    controls,
  };

  const WrappedView = (props) => {
    const mergedProps = { ...staticProps, ...props };
    const formView = React.createElement(View, { ...staticProps, ...props, key: 'formView' });
    if (!mergedProps.onChange) return formView;
    return React.createElement(OnChangeListener, mergedProps, formView);
    // return [
    //   formView,
    //   React.createElement(OnChangeListener, mergedProps, formView),
    // ];
    // return (
    //   <React.Fragment>
    //     {formView}
    //     <OnChangeListener {} />
    //   </React.Fragment>
    // )
    // return [
    //   React.createElement('div', { key: 1 }, formView),
    //   React.createElement('div', { key: 2 }, React.createElement(OnChangeListener, mergedProps)),
    // ];
  };

  const wrapperWithFormik = rawWithFormik || withFormik;
  return wrapperWithFormik({
    mapPropsToValues(props) {
      const { initialValues } = props;
      const defaultValues = cloneDeep(initialValues) || {};

      Object.keys(rawControls).forEach((key) => {
        // console.log(key, typeof get(defaultValues, key), typeof rawControls[key].default);
        if (typeof get(defaultValues, key) !== 'undefined') return;
        if (rawControls[key].key) return;

        let initialValue = get(rawControls, `${key}.initialValue`);
        if (initialValue === 'undefined') {
          initialValue = get(rawControls, `${key}.defaultValue`);
          if (initialValue === 'undefined') return;
        }
        // initialValue = get(rawControls, `${key}.defaultValue`);
        // get(rawControls, `${key}.value`,)
        set(defaultValues, key, initialValue);
      });
      // console.log({ defaultValues, props });
      return defaultValues;
    },
    handleSubmit: async (values, {
      setSubmitting,
      props,
      setStatus,
      // status,
      isSubmitting,
    }) => {
      const { onSubmit } = props;

      // console.log({status, isSubmitting});

      if (!isSubmitting) {
        setStatus('progress');
        try {
          if (values) values = avoidNestedFields(values);
          if (onSubmit) await onSubmit(values, { setSubmitting });
          setStatus('success');
        } catch (err) {
          setStatus('error');
        }
        setSubmitting(false);
        setTimeout(() => {
          setStatus(null);
        }, 1000);
      }
    },
    handleChange: (values, { /* setSubmitting, */ props3/* , form  */ }) => {
      // console.log('Form2.handleChange', values, props, props3);
      try {
        const onChange = get(this, 'props.onChange') || get(props3, 'onChange');
        if (onChange) onChange(values);
      } catch (err) {
        console.log('onChange err', err);
      }
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
      try {
        // this.handleChange(values);
        const onChange = get(this, 'props.onChange') || get(otherProps, 'onChange');
        // const { onChange } = props;
        if (onChange) onChange(values);
      } catch (err) {
        console.log('onChange err', err);
      }
    },
    validateOnChange: false,
    validateOnBlur: false,
    displayName: displayName || 'Form',
    ...otherProps,
  })(WrappedView);
};

export default createForm;
