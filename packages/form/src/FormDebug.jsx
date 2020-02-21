import React from 'react';
import pick from 'lodash/pick';
import DEV from '@lskjs/dev/DEV';
import FormSubmit from './FormSubmit';

export default props => (
  <>
    <hr />
    <FormSubmit {...props}>Submit</FormSubmit>
    <div />
    <DEV json={pick(props, ['touched', 'isSubmitting', 'errors', 'values', 'status'])} />
  </>
);
