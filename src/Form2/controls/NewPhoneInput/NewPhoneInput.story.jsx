
import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import NewPhoneInput from './NewPhoneInput';
import FormDebug from '../../FormDebug';

const NewPhoneInputFormView = (props) => {
  return (
    <Form>
      <Field {...props.control('phone')} />
      <Field {...props.control('phone2')} />
      <Field {...props.control('phone3')} />
      <Field {...props.control('phone4')} />
      <FormDebug {...props} />
    </Form>
  );
};

const NewPhoneInputForm = createForm({
  view: NewPhoneInputFormView,
  controls: {
    phone: {
      title: 'default',
      component: NewPhoneInput,
    },
    phone2: {
      title: 'defaultCountry',
      component: NewPhoneInput,
      defaultCountry: 'ru',
    },
    phone3: {
      title: 'placeholder',
      component: NewPhoneInput,
      placeholder: 'Введите номер!',
    },
    phone4: {
      title: 'NewPhoneInput',
      component: NewPhoneInput,
      defaultCountry: 'ru',
    },
    phone5: {
      title: 'NewPhoneInput',
      component: NewPhoneInput,
      defaultCountry: 'ru',
    },
    phone6: {
      title: 'NewPhoneInput',
      component: NewPhoneInput,
      defaultCountry: 'ru',
    },
  },
});

export default ({ storiesOf }) => (
  storiesOf('Form2/controls/NewPhoneInput', module)
    .add('default', () => (
      <Story>
        <NewPhoneInputForm
          initialValues={{
            phone4: 'sfkjghkjsdhfgkjhsdjkf',
            phone5: 873459876349857983475897398579834,
            phone6: [{ asd: 1231231 }],
          }}
        />
      </Story>
    ))
);
