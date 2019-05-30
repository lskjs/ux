import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import Date from './Date';
import FormDebug from '../../FormDebug';

window.__CLIENT__ = true;

const DateFormView = props => (
  <Form>
    <div style={{ position: 'relative' }}>
      <Field {...props.control('date')} />
      <Field {...props.control('date2')} />
      <Field {...props.control('date3')} />
      <FormDebug {...props} />
    </div>
  </Form>
);

const DateForm = createForm({
  view: DateFormView,
  controls: {
    date: {
      title: 'Date',
      component: Date,
      ranged: true,
      futureOnly: true,
    },
    date2: {
      title: 'Date',
      component: Date,
      futureOnly: true,
    },
    date3: {
      title: 'Date',
      component: Date,
      showTime: true,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('controls', module)
    .add('Date ', () => {
      return (
        <Story>
          <DateForm />
        </Story>
      );
    });
