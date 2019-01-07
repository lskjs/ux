import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import InputArray from '../../controls/InputArray';
import FormGroup from '../../FormGroup';
import DEV from '../../../DEV';

const InputArrayView = (props) => {
  const {
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.inputArray} />
      <DEV json={values} />
    </Form>
  );
};

const InputArrayForm = createForm({
  view: InputArrayView,
  FormGroup,
  controls: {
    inputArray: {
      title: 'InputArray',
      component: InputArray,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('InputArray ', () => {
      return (
        <Story>
          <InputArrayForm />
        </Story>
      );
    });
