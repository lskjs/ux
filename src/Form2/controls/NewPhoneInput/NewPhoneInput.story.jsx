
import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import NewPhoneInput from './NewPhoneInput';
import FormDebug from '../../FormDebug';

const NewPhoneInputFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.NewPhoneInput} />
      <FormDebug {...props} />
    </Form>
  );
};

const NewPhoneInputForm = createForm({
  view: NewPhoneInputFormView,
  controls: {
    NewPhoneInput: {
      title: 'NewPhoneInput',
      component: NewPhoneInput,
    },
  },
});

export default ({ storiesOf }) => (
  storiesOf('Form2/controls/NewPhoneInput', module)
    .add('default', () => (
      <Story>
        <NewPhoneInputForm />
      </Story>
    ))
    .add('country', () => (
      <Story>
        <NewPhoneInputForm defaultCountry="af" />
      </Story>
    ))
    .add('placeholder', () => (
      <Story>
        <NewPhoneInputForm placeholder="Введите номер!" />
      </Story>
    ))
);
