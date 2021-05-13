import React from 'react';
import FormSubmitButton from './FormSubmitButton';
import FormSubmitError from './FormSubmitError';

export default props => (
  <>
    <FormSubmitError {...props} />
    <FormSubmitButton {...props} />
  </>
);
