import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import InputComponent from '../../controls/Input';
import LightFormGroup from '../../LightFormGroup';
import DEV from '../../../DEV';

const InputView = (props) => {
  const {
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.input} />
      <DEV json={values} />
    </Form>
  );
};

const Input = createForm({
  view: InputView,
  FormGroup: LightFormGroup,
  controls: {
    input: {
      title: 'Input',
      component: InputComponent,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Input ', () => {
      return (
        <Story>
          <Input />
        </Story>
      );
    });
