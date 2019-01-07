import React from 'react';
import { Form, Field } from 'formik';
import moment from 'moment';
import Story from '../../../Story';
import createForm from '../../createForm';
import CalendarComponent from '../../controls/Calendar';
import LightFormGroup from '../../LightFormGroup';
import DEV from '../../../DEV';

const CalendarView = (props) => {
  const {
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.calendar} />
      <DEV json={values} />
    </Form>
  );
};

const Calendar = createForm({
  view: CalendarView,
  FormGroup: LightFormGroup,
  controls: {
    calendar: {
      title: 'Calendar',
      component: CalendarComponent,
      highlightedDates: [
        moment('2019-01-15'),
      ],
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Calendar ', () => {
      return (
        <Story>
          <Calendar />
        </Story>
      );
    });
