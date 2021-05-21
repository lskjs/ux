import { FastField, Field, Form } from 'formik';
import React, { useEffect } from 'react';

import createForm from '../../form2/src/createForm';
// import FormDebug from '../../form2/src/FormDebug';
import Input from '../src/PhoneInput';

const PhoneInput = () => <Input />;

const PhoneInputFormView = (props) => {
  useEffect(() => {
    props.setFieldError('info.phone2', 'test');
    props.setFieldError('phone', 'test2');
  }, []);
  return (
    <Form>
      <Field {...props.control('phone')} />
      <Field {...props.control('phone1')} />
      <Field {...props.control('info.phone2')} />
      <Field {...props.control('phone3')} />
      {/* <FormDebug {...props} /> */}
    </Form>
  );
};

const PhoneInputForm = createForm({
  view: PhoneInputFormView,
  controls: {
    phone: {
      title: 'default country',
      component: PhoneInput,
    },
    phone1: {
      title: 'Поиск по странам',
      component: PhoneInput,
      defaultCountry: 'fr',
      enableSearchField: true,
    },
    'info.phone2': {
      title: 'Пример региона',
      component: PhoneInput,
      defaultCountry: 'it',
      defaultBehavior: true,
      regions: 'europe',
    },
    phone3: {
      title: 'Определенные страны',
      component: PhoneInput,
      defaultCountry: 'fr',
      onlyCountries: ['fr', 'at'],
    },
  },
});

export default {
  title: 'form-control-phone-input/PhoneInputForm',
  component: PhoneInputForm,
};

export const Default = () => (
  <PhoneInputForm
    onSubmit={(e) => console.log(e)}
    initialValues={{
      input: '+7 (917) 123 1234',
      phone: '+7 (917) 123 1234',
      phone6: 'uhuhuhuhuht',
    }}
  />
);
