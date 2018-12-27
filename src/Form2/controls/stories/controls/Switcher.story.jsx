import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../../Story';
import createForm from '../../../createForm';
import SwitcherComponent from '../../../controls/Switcher';
import LightFormGroup from '../../../LightFormGroup';

const SwitcherView = (props) => {
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
  storiesOf('Form2/stories/controls', module)
    .add('Switcher ', () => {
      return (
        <Story>
          <Switcher />
        </Story>
      );
    });
