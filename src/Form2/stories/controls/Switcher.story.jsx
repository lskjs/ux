import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import SwitcherComponent from '../../controls/Switcher';
import LightFormGroup from '../../LightFormGroup';
import DEV from '../../../DEV';

const SwitcherView = (props) => {
  const {
    handleSubmit,
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.switcher} />
      <DEV json={values} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

const Switcher = createForm({
  view: SwitcherView,
  FormGroup: LightFormGroup,
  controls: {
    switcher: {
      title: 'switcher',
      component: SwitcherComponent,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Switcher ', () => {
      return (
        <Story>
          <Switcher />
        </Story>
      );
    });
