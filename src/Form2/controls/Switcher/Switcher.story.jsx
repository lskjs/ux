import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import Switcher from './Switcher';
import FormDebug from '../../FormDebug';

const SwitcherFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.switcher} />
      <FormDebug {...props} />
    </Form>
  );
};

const SwitcherForm = createForm({
  view: SwitcherFormView,
  controls: {
    switcher: {
      title: 'switcher',
      component: Switcher,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Switcher ', () => {
      return (
        <Story>
          <SwitcherForm />
        </Story>
      );
    });
