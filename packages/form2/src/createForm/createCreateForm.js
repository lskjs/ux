import isFunction from 'lodash/isFunction';
import React from 'react';

import createHandleSubmit from './createHandleSubmit';
import createMapPropsToValues from './createMapPropsToValues';
import createValidate from './createValidate';
import getValidators from './getValidators';
import prepareControls from './prepareControls';
import wrapView from './wrapView';

export default (preConfig = {}) => (realtimeConfig = {}) => {
  let config;
  if (isFunction(realtimeConfig)) {
    config = realtimeConfig({});
    // config = inject(realtimeConfig);
  } else {
    config = realtimeConfig;
  }
  config = {
    ...preConfig,
    ...config,
  };

  const {
    controls: rawControls,
    withI18 = false,
    debug = false,
    view: RawView,
    FormGroup,
    withFormik,
    flatten = true,
    onError,
    pick,
    OnChangeListener = React.Fragment,
    ...withFormikConfigProps
  } = config;
  if (!withFormik) throw '!withFormik';
  if (debug) console.log('createForm.config', { preConfig, realtimeConfig, config, withFormikConfigProps }); // eslint-disable-line no-console

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
    ...withFormikConfigProps,
  })(View);
};
