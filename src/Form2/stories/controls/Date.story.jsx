import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import DateComponent from '../../controls/Date';
import LightFormGroup from '../../LightFormGroup';


const DateView = (props) => {
  const {
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.date} />
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
