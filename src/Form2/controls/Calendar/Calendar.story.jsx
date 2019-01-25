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
      <Field {...props.controls.calendar2} />
      <Field {...props.controls.calendar3} />
      <Field {...props.controls.calendar4} />
      <Field {...props.controls.calendar5} />
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
    calendar2: {
      title: 'Calendar string date 2019-01-01',
      component: Calendar,
      defaultValue: '2019-01-01',
    },
    calendar3: {
      title: 'Calendar invalid date 2019',
      component: Calendar,
      defaultValue: '2019',
    },
    calendar4: {
      title: 'Calendar string date in new Date',
      component: Calendar,
      defaultValue: new Date('2019-01-06'),
    },
    calendar5: {
      title: 'Calendar invalid date in new Date',
      component: Calendar,
      defaultValue: new Date('2019'),
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Calendar ', () => {
      return (
        <Story>
          <CalendarForm />
        </Story>
      );
    });
