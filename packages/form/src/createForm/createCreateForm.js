import React from 'react';
import isFunction from 'lodash/isFunction';
import getValidators from './getValidators';
import prepareControls from './prepareControls';
import wrapView from './wrapView';
import createMapPropsToValues from './createMapPropsToValues';
import createHandleSubmit from './createHandleSubmit';
import createValidate from './createValidate';
import DEBUG from './_debug';

export default ({
  OnChangeListener = React.Fragment,
  withFormik: defaultWithFormik,
  withI18 = false,
  debug = false,
  ...creatorConfig
}) => configOrFn => {
  let config;
  if (isFunction(configOrFn)) {
    config = configOrFn({});
    // config = inject(configOrFn);
  } else {
    config = configOrFn;
  }
  if (debug) console.log('createForm.config', config); // eslint-disable-line no-console
  config = {
    ...creatorConfig,
    ...config,
  };
  const {
    controls: rawControls,
    view: RawView,
    FormGroup,
    withFormik = defaultWithFormik,
    flatten = true,
    onError,
    pick,
    ...configProps
  } = config;

  const { controls, control } = prepareControls(rawControls, { FormGroup, withI18, debug });
  if (debug) console.log('createForm.controls', controls); // eslint-disable-line no-console
  const { validators, customValidators } = getValidators(controls);
  if (debug) console.log('createForm.validators', validators); // eslint-disable-line no-console
  if (debug) console.log('createForm.customValidators', customValidators); // eslint-disable-line no-console
  const View = wrapView({
    View: RawView,
    Wrapper: OnChangeListener,
    props: {
      controls,
      control,
      validators,
      customValidators,
    },
    flatten,
  });

  return withFormik({
    mapPropsToValues: createMapPropsToValues({ controls, pick }),
    handleSubmit: createHandleSubmit({ flatten }),
    validate: createValidate({
      validators,
      customValidators,
      onError,
      controls,
    }),
    validateOnChange: false,
    validateOnBlur: false,
    ...configProps,
  })(View);
};
