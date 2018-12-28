import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import RadioComponent from '../../controls/Radio';
import LightFormGroup from '../../LightFormGroup';


const RadioView = (props) => {
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

const Radio = createForm({
  view: RadioView,
  FormGroup: LightFormGroup,
  controls: {
    blue: {
      title: 'first value',
      component: RadioComponent,
    },
    black: {
      title: 'second value',
      component: RadioComponent,
    },
    green: {
      title: 'third value',
      component: RadioComponent,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/stories/controls', module)
    .add('Radio ', () => {
      return (
        <Story>
          <Radio />
        </Story>
      );
    });
