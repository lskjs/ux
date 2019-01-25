import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import Radio from './Radio';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

const RadioFormView = (props) => {
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

const RadioForm = createForm({
  view: RadioFormView,
  FormGroup,
  controls: {
    blue: {
      title: 'first value',
      component: Radio,
      id: 1,
    },
    black: {
      title: 'second value',
      component: Radio,
      id: 2,
    },
    green: {
      title: 'third value',
      component: Radio,
      id: 3,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Radio ', () => {
      return (
        <Story>
          <RadioForm />
        </Story>
      );
    });
