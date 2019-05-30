import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import PhoneInputOld from './PhoneInputOld';
import FormDebug from '../../FormDebug';

const PhoneInputOldFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.phoneInputOld} />
      <FormDebug {...props} />
    </Form>
  );
};

const PhoneInputOldForm = createForm({
  view: PhoneInputOldFormView,
  controls: {
    phoneInputOld: {
      title: 'PhoneInputOld',
      component: PhoneInputOld,
      defaultCountry: 'ru',
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('controls_remove', module)
    .add('PhoneInputOld ', () => {
      return (
        <Story>
          <PhoneInputOldForm />
        </Story>
      );
    });
