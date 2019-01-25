import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import Range from './Range';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

const RangeFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.range} />
      <FormDebug {...props} />
      {/* <Button onClick={handleSubmit}>Submit</Button> */}
    </Form>
  );
};

const RangeForm = createForm({
  view: RangeFormView,
  FormGroup,
  controls: {
    range: {
      title: 'range',
      component: Range,
      min: 0,
      max: 20,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Range ', () => {
      return (
        <Story>
          <RangeForm />
        </Story>
      );
    });
