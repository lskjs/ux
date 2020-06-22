import React from 'react';
import { Form, Field } from 'formik';

import Story from '../Story';
import createFormWithI18 from '../../createFormWithI18';
import Input from '../../controls/Input';
import Select from '../../controls/Select';
import Textarea from '../../controls/Textarea';
import PhoneInput from '../../controls/PhoneInput';
import FormDebug from '../../FormDebug';

const FormExample4View = props => (
  <Form>
    <Field {...props.control('email')} />
    <Field {...props.control('password')} />
    <Field {...props.control('name')} />
    <Field {...props.control('role')} />
    <Field {...props.control('info.phone')} />
    <Field {...props.control('info.comment')} />
    <Field {...props.control('info.referrer')} />
    <FormDebug {...props} />
  </Form>
);

export const FormExample4 = createFormWithI18(({ i18 }) => ({
  view: FormExample4View,
  controls: {
    email: {
      component: Input,
      title: i18.t('common.email'),
      required: true,
      type: 'email',
      placeholder: 'Your email',
    },
    password: {
      component: Input,
      title: i18.t('common.password'),
      required: true,
      type: 'password',
      placeholder: '8 chars minimum',
    },
    name: {
      component: Input,
      title: 'Name',
      required: true,
      placeholder: 'Name',
    },
    role: {
      component: Select,
      title: 'Role',
      options: ['customer', 'executor'],
      required: true,
      placeholder: 'Choose your role',
    },
    'info.phone': {
      component: PhoneInput,
      title: 'Phone',
      required: true,
    },
    'info.comment': {
      component: Textarea,
      title: 'Comment',
      placeholder: 'Write something about you',
      minRows: 6,
    },
  },
}));

export default ({ storiesOf }) =>
  storiesOf('form/examples', module)
    .add('example4 with i18', () => {
      // console.log('FormExample4', FormExample4);
      return (
        <Story>
          <FormExample4 onSubmit={console.log} />
        </Story>
      );
    });
