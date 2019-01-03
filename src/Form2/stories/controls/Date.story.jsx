import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import DateComponent from '../../controls/Date';
import LightFormGroup from '../../LightFormGroup';
import DEV from '../../../DEV';

const DateView = (props) => {
  const {
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.date} />
      <Field {...controls.date2} />
      <DEV json={values} />
    </Form>
  );
};

const Date = createForm({
  view: DateView,
  FormGroup: LightFormGroup,
  controls: {
    date: {
      title: 'Date',
      component: DateComponent,
      ranged: true,
    },
    date2: {
      title: 'Date',
      component: DateComponent,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Date ', () => {
      return (
        <Story>
          <Date />
        </Story>
      );
    });
