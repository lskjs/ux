import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import Switcher from './Switcher';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

const SwitcherFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.switcher} />
      <FormDebug {...props} />
      <Button onClick={props.handleSubmit}>Submit</Button>
    </Form>
  );
};

const SwitcherForm = createForm({
  view: SwitcherFormView,
  FormGroup,
  controls: {
    switcher: {
      title: 'switcher',
      component: Switcher,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Switcher ', () => {
      return (
        <Story>
          <SwitcherForm />
        </Story>
      );
    });
