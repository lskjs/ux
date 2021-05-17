/* eslint-disable no-console */
import forEach from 'lodash/forEach';
import isEmpty from 'lodash/isEmpty';
import validate from 'validate.js'; // TODO: что делать?
import Promise from 'bluebird';// TODO:  заменить на нативный
import DEBUG from './_debug';

export default ({ validators, customValidators, onError, controls }) => async (values) => {
  if (DEBUG) console.log('Form2 validate', values, validators, customValidators);
  const errors = {};

  // validate by validate.js
  if (DEBUG) console.log('createValidate before validatejs.async');
  try {
    await validate.async(values, validators, { fullMessages: false });
  } catch (err) {
    if (DEBUG) console.log('Form2 validate.async', err);
    forEach(err, (error, name) => {
      errors[name] = error && error.length && error[0];
    });
  }
  if (DEBUG) console.log('createValidate after validatejs.async errors:', errors);

  if (DEBUG) console.log('createValidate before customValidators');
  // validate by custom functions
  await Promise.map(customValidators, async ({ name, validator }) => {
    if (errors[name]) return; // skip
    try {
      const message = await validator(values[name], values);
      if (message) {
        errors[name] = typeof message === 'string' ? message : 'The Error';
      }
    } catch (err) {
      if (typeof err === 'string') errors[name] = err;
      if (err && typeof err.message === 'string') errors[name] = err.message;
    }
  });
  if (DEBUG) console.log('createValidate after before errors:', errors);

  // if (DEBUG) console.log('errors', errors, isEmpty(errors));
  if (DEBUG) console.log('createValidate isEmpty(errors):', isEmpty(errors), 'onError:', !!onError);

  if (!isEmpty(errors)) {
    if (onError) {
      onError({ errors, controls });
    } else {
      throw errors;
    }
  }
};
