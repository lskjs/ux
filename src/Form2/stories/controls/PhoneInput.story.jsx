import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import PhoneInputComponent from '../../controls/PhoneInput';
import LightFormGroup from '../../LightFormGroup';
import DEV from '../../../DEV';

const PhoneInputView = (props) => {
  const {
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.phoneInput} />
      <DEV json={values} />
    </Form>
  );
};

const PhoneInput = createForm({
  view: PhoneInputView,
  FormGroup: LightFormGroup,
  controls: {
    phoneInput: {
      title: 'PhoneInput',
      component: PhoneInputComponent,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('PhoneInput ', () => {
      return (
        <Story>
          <PhoneInput />
        </Story>
      );
    });
