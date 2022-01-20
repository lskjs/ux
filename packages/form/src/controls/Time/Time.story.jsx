import Story from '@lskjs/dev/Story';
import { Field, Form } from 'formik';
import React from 'react';

import createForm from '../../createForm';
import FormDebug from '../../FormDebug';
import Time from './Time';

window.__CLIENT__ = true;

const TimeFormView = (props) => (
  <Form>
    <div style={{ position: 'relative' }}>
      <Field {...props.control('time')} />
      <FormDebug {...props} />
    </div>
  </Form>
);

const TimeForm = createForm({
  view: TimeFormView,
  controls: {
    time: {
      title: 'Time',
      component: Time,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module).add('Time ', () => (
    <Story>
      <TimeForm />
    </Story>
  ));
