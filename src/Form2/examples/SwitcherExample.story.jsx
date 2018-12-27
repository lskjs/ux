import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../Story';
import createForm from '../createForm';
import Switcher from '../controls/Switcher';
import LightFormGroup from '../LightFormGroup';


const SwitcherExampleView = (props) => {
  const {
    handleSubmit,
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.switcher} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

const SwitcherExample = createForm({
  view: SwitcherExampleView,
  FormGroup: LightFormGroup,
  controls: {
    switcher: {
      title: 'switcher',
      component: Switcher,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2', module)
    .add('SwitcherExample', () => {
      return (
        <Story>
          <SwitcherExample />
        </Story>
      );
    });
