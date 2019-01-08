import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import RadioComponent from '../../controls/Radio';
import FormGroup from '../../FormGroup';
import DEV from '../../../DEV';

const RadioView = (props) => {
  const {
    // handleSubmit,
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.blue} />
      <Field {...controls.black} />
      <Field {...controls.green} />
      <DEV json={values} />
      {/* <Button onClick={handleSubmit}>Submit</Button> */}
    </Form>
  );
};

const Radio = createForm({
  view: RadioView,
  FormGroup,
  controls: {
    blue: {
      title: 'first value',
      component: RadioComponent,
      id: 1,
    },
    black: {
      title: 'second value',
      component: RadioComponent,
      id: 2,
    },
    green: {
      title: 'third value',
      component: RadioComponent,
      id: 3,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Radio ', () => {
      return (
        <Story>
          <Radio />
        </Story>
      );
    });
