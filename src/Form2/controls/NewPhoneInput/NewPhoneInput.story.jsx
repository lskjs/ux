import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import PhoneInput from './NewPhoneInput';
import FormDebug from '../../FormDebug';

// import '../../../UI/molecules/PhoneInput/PhoneInput.g.css';

const PhoneInputFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.phoneInput} />
      <FormDebug {...props} />
    </Form>
  );
};

const NewPhoneInputForm = createForm({
  view: PhoneInputFormView,
  controls: {
    phoneInput: {
      title: 'PhoneInput',
      component: PhoneInput,
      defaultCountry: null,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('NewPhone ', () => {
      return (
        <Story>
          <NewPhoneInputForm />
        </Story>
      );
    });
