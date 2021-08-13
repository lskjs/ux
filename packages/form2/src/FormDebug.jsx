import DEV from '@lskjs/dev/DEV';
import pick from 'lodash/pick';
import React from 'react';

import FormSubmit from './FormSubmit';

const FormDebug = (props) => (
  <>
    <hr />
    <FormSubmit {...props}>Submit</FormSubmit>
    <div />
    <DEV json={pick(props, ['touched', 'isSubmitting', 'errors', 'values', 'status'])} />
  </>
);

export default FormDebug;
