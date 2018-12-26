import React from 'react';
import { Form, FastField } from 'formik';

import Story from '../../Story';
import DEV from '../../DEV';
import createForm from '../createForm';
import Input from '../controls/Input';
import LightFormGroup from '../LightFormGroup';


const FormExample1View = (props) => {
  const {
    handleSubmit,
    controls,
    values,
  } = props;
  return (
    <Form>
      <FastField {...controls.input} />
      <DEV json={values} />
      <button onClick={handleSubmit}>Submit</button>
    </Form>
  );
};

const FormExample1 = createForm({
  view: FormExample1View,
  FormGroup: LightFormGroup,
  controls: {
    input: {
      title: 'input',
      component: Input,
      placeholder: 'offer.placeholders.title',
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2', module)
    .add('FormExample1', () => {
      return (
        <Story>
          <FormExample1 />
        </Story>
      );
    });
