import { Field, Form } from 'formik';
import React from 'react';

import Input from '../../src/controls/Input';
import PhoneInput from '../../src/controls/PhoneInput';
import Select from '../../src/controls/Select';
import Textarea from '../../src/controls/Textarea';
import createForm from '../../src/createForm';
import FormDebug from '../../src/FormDebug';
import Story from '../Story';

const FormExample3View = (props) => (
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

export const FormExample3 = createForm({
  view: FormExample3View,
  controls: {
    email: {
      component: Input,
      title: 'Email',
      required: true,
      type: 'email',
      placeholder: 'Your email',
    },
    password: {
      component: Input,
      title: 'Password',
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
});

export default ({ storiesOf }) =>
  storiesOf('form/examples', module).add('FormExample3', () => (
    <Story>
      <FormExample3 onSubmit={console.log} />
    </Story>
  ));
