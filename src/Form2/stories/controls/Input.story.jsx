import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import InputComponent from '../../controls/Input';
import LightFormGroup from '../../LightFormGroup';


const InputView = (props) => {
  const {
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.input} />
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
