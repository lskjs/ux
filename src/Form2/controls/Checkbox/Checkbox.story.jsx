import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import Checkbox from './Checkbox';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

const CheckboxFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.blue} />
      <Field {...props.controls.black} />
      <Field {...props.controls.green} />
      <FormDebug {...props} />
      {/* <Button onClick={handleSubmit}>Submit</Button> */}
    </Form>
  );
};

const CheckboxForm = createForm({
  view: CheckboxFormView,
  // FormGroup,
  controls: {
    blue: {
      title: 'first value',
      component: Checkbox,
      label: '1',
    },
    black: {
      title: 'second value',
      component: Checkbox,
      label: '2',
    },
    green: {
      title: 'third value',
      component: Checkbox,
      label: '3',
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Checkbox ', () => {
      return (
        <Story>
          <CheckboxForm />
        </Story>
      );
    });
