import React from 'react';
import moment from 'moment';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import Calendar from './Calendar';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

const CalendarFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.calendar1} />
      <Field {...props.controls.calendar2} />
      <Field {...props.controls.calendar3} />
      <Field {...props.controls.calendar4} />
      <Field {...props.controls.calendar5} />
      <Field {...props.controls.calendar6} />
      <Field {...props.controls.calendar7} />
      <FormDebug {...props} />
    </Form>
  );
};

const CalendarForm = createForm({
  view: CalendarFormView,
  FormGroup,
  controls: {
    calendar1: {
      title: 'Calendar',
      component: Calendar,
      // highlightedDates: [
      //   new Date('2019-01-15'),
      //   new Date('2019-01-18'),
      // ],
      highlightedDates: [
        moment('2019-01-15'),
        moment('2019-01-18'),
      ],
    },
    calendar2: {
      title: 'Calendar string date 2019-01-01',
      component: Calendar,
    },
    calendar3: {
      title: 'Calendar invalid date "2019"',
      component: Calendar,
    },
    calendar4: {
      title: 'new Date',
      component: Calendar,
    },
    calendar5: {
      title: 'Date.now()',
      component: Calendar,
    },
    calendar6: {
      title: 'Calendar invalid date in new Date',
      component: Calendar,
    },
    calendar7: {
      title: 'Calendar with undefined',
      component: Calendar,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Calendar ', () => {
      return (
        <Story>
          <CalendarForm
            initialValues={{
              calendar1: null,
              calendar2: '2019-01-01',
              calendar3: '2019',
              calendar4: new Date('2019-01-06'),
              calendar5: new Date('invalid'),
              calendar6: Date.now(),
            }}
            onChange={values => console.log('onChange', values)}
          />
        </Story>
      );
    });
