import Story from '@lskjs/dev/Story';
import { Field, Form } from 'formik';
import React from 'react';

import createForm from '../../createForm';
import FormDebug from '../../FormDebug';
import Range from './Range';

const RangeFormView = (props) => (
  <Form>
    <Field {...props.control('range')} />
    <FormDebug {...props} />
  </Form>
);

const RangeForm = createForm({
  view: RangeFormView,
  controls: {
    range: {
      title: 'range',
      component: Range,
      min: 0,
      max: 20,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module).add('Range ', () => (
    <Story>
      <RangeForm />
    </Story>
  ));
