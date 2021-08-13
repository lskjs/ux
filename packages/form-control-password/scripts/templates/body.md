Password example:

```js
import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormSubmit from '../../FormSubmit';
import Password from './Password';

const PasswordFormView = props => (
  <Form>
    <Field {...props.control('password')} />
    <FormSubmit {...props} />
  </Form>
);

const PasswordForm = createForm({
  view: PhoneFormView,
  controls: {
    password: {
      title: 'Password',
      component: Password,
    },
  },
});

<Story>
  <PasswordForm />
</Story>
```
