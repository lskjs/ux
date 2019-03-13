
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
      <Field {...props.control('phone1')} />
      <Field {...props.control('phone3')} />
      <FormDebug {...props} />
    </Form>
  );
};

const NewPhoneInputForm = createForm({
  view: NewPhoneInputFormView,
  controls: {
    phone: {
      title: 'defaultCountry',
      component: NewPhoneInput,
      defaultCountry: 'fr',
    },
    phone1: {
      title: 'Поиск по странам',
      component: NewPhoneInput,
      defaultCountry: 'ru',
      enableSearchField: true,
    },
    phone3: {
      title: 'Регион и пример локализации',
      component: NewPhoneInput,
      defaultCountry: 'fr',
      regions: 'europe',
      localization: { Germany: 'Deutschland', Spain: 'España' },
    },
  },
});

export default ({ storiesOf }) => (
  storiesOf('Form2/controls/NewPhoneInput', module)
    .add('default', () => (
      <Story>
        <NewPhoneInputForm
          initialValues={{
            phone6: 'uhuhuhuhuht',
          }}
        />
      </Story>
    ))
);
