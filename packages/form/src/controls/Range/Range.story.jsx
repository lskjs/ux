import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import Range from './Range';
import FormDebug from '../../FormDebug';

const RangeFormView = props => (
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
  storiesOf('controls', module)
    .add('Range ', () => {
      return (
        <Story>
          <RangeForm />
        </Story>
      );
    });
