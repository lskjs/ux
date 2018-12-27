import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Story from '../../Story';
import createForm from '../createForm';
import Radio from '../controls/Radio';
import LightFormGroup from '../LightFormGroup';


const RadioExampleView = (props) => {
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

const RadioExample = createForm({
  view: RadioExampleView,
  FormGroup: LightFormGroup,
  controls: {
    blue: {
      title: 'first value',
      component: Radio,
    },
    black: {
      title: 'second value',
      component: Radio,
    },
    green: {
      title: 'third value',
      component: Radio,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2', module)
    .add('RadioExample', () => {
      return (
        <Story>
          <RadioExample />
        </Story>
      );
    });
