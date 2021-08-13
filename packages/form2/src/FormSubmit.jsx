import React from 'react';

import FormSubmitButton from './FormSubmitButton';
import FormSubmitError from './FormSubmitError';

const FormSubmit = (props) => (
  <>
    <FormSubmitError {...props} />
    <FormSubmitButton {...props} />
  </>
);

export default FormSubmit;
