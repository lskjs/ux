import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import Calendar from './Calendar';
import Input from '../Input';
import FormDebug from '../../FormDebug';

window.__DEV__ = true;

const CalendarFormView = props => (
  <Form>
    <Field {...props.control('calendar1')} />
    <Field {...props.control('calendar2')} />
    <Field {...props.control('calendar3')} />
    <Field {...props.control('calendar4')} />
    <Field {...props.control('calendar5')} />
    <Field {...props.control('calendar6')} />
    <Field {...props.control('calendar7')} />
    <Field {...props.control('date')} />
    <FormDebug {...props} />
  </Form>
);

const CalendarForm = createForm({
  view: CalendarFormView,
  controls: {
    date: {
      title: 'Date',
      component: Input,
    },
    calendar1: {
      title: 'Calendar',
      component: Calendar,
      // futureOnly: true,
      highlightedDates: [
        new Date('2019-02-15'),
        new Date('2019-02-18'),
        new Date('2019-02-17'),
        '2019-02-02',
        '2019-03-13',
        '2019-02-04',
        '2019-02-13',
        new Date(),
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

export default ({ storiesOf }) => storiesOf('form/controls', module)
  .add('Calendar ', () => (
    <Story>
      <CalendarForm
        initialValues={{
          date: new Date(),
          calendar1: null,
          calendar2: '2019-01-02',
          calendar3: '2019',
          calendar4: new Date('2019-01-06'),
          // calendar5: new Date('invalid'),
          calendar6: Date.now(),
        }}
        onChange={values => console.log('onChange', values)}
      />
    </Story>
  ));
