import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import Date from './Date';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

const DateFormView = (props) => {
  return (
    <Form>
      <div style={{ position: 'relative', left: '200px' }}>
        <Field {...props.controls.date} />
        <Field {...props.controls.date2} />
        <FormDebug {...props} />
      </div>
    </Form>
  );
};

const DateForm = createForm({
  view: DateFormView,
  FormGroup,
  controls: {
    date: {
      title: 'Date',
      component: Date,
      ranged: true,
    },
    date2: {
      title: 'Date',
      component: Date,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Date ', () => {
      return (
        <Story>
          <DateForm />
        </Story>
      );
    });
