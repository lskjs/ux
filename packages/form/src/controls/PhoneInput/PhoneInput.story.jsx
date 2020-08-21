import React, { useEffect } from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import PhoneInput from './PhoneInput';
import FormDebug from '../../FormDebug';

const PhoneInputFormView = props => {
  useEffect(() => {
    props.setFieldError('info.phone2', 'test');
  }, []);
  return (
    <Form>
      <Field {...props.control('phone')} />
      <Field {...props.control('phone1')} />
      <Field {...props.control('info.phone2')} />
      <Field {...props.control('phone3')} />
      <FormDebug {...props} />
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

export default ({ storiesOf }) =>
  storiesOf('form/controls', module).add('PhoneInput', () => (
    <Story>
      <PhoneInputForm
        onSubmit={(...props) => console.log(props)}
        initialValues={{
          input: '+7 (917) 123 1234',
          phone: '+7 (917) 123 1234',
          phone6: 'uhuhuhuhuht',
        }}
      />
    </Story>
  ));
