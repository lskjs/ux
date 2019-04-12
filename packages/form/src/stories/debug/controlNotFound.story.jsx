import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import Input from '../../controls/Input';
import FormDebug from '../../FormDebug';

const InputFormView = props => (
  <Form>
    <Field {...props.control('notFound')} />
    <FormDebug {...props} />
  </Form>
);

const DemoForm = createForm({
  view: InputFormView,
  control: {
    login: {
      title: 'Login',
      component: Input,
    },
    password: {
      title: 'Password',
      component: Input,
      type: 'password',
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/debug', module)
    .add('controlNotFound', () => {
      return (
        <Story>
          <DemoForm
            onSubmit={(values) => { console.log({ values }); }}
          />
        </Story>
      );
    });

