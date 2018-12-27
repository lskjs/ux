import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Story from '../../Story';
import createForm from '../createForm';
import Checkbox from '../controls/Checkbox';
import LightFormGroup from '../LightFormGroup';


const CheckboxExampleView = (props) => {
  const {
    // handleSubmit,
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.blue} />
      <Field {...controls.black} />
      <Field {...controls.green} />
      {/* <Button onClick={handleSubmit}>Submit</Button> */}
    </Form>
  );
};

const CheckboxExample = createForm({
  view: CheckboxExampleView,
  FormGroup: LightFormGroup,
  controls: {
    blue: {
      title: 'first value',
      component: Checkbox,
    },
    black: {
      title: 'second value',
      component: Checkbox,
    },
    green: {
      title: 'third value',
      component: Checkbox,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2', module)
    .add('CheckboxExample', () => {
      return (
        <Story>
          <CheckboxExample />
        </Story>
      );
    });
