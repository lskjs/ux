import React from 'react';
import { Form, Field } from 'formik';
import moment from 'moment';
import Story from '../../../Story';
import createForm from '../../createForm';
import Calendar from './Calendar';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

const CalendarFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.calendar} />
      <FormDebug {...props} />
    </Form>
  );
};

const CalendarForm = createForm({
  view: CalendarFormView,
  FormGroup,
  controls: {
    calendar: {
      title: 'Calendar',
      component: Calendar,
      highlightedDates: [
        moment('2019-01-15'),
        moment('2019-01-18'),
      ],
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Calendar ', () => {
      return (
        <Story>
          <CalendarForm />
        </Story>
      );
    });
