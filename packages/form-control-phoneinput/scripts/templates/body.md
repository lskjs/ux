Phone example:

```js
import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormSubmit from '../../FormSubmit';
import PhoneInput from './PhoneInput';

const PhoneFormView = props => (
  <Form>
    <Field {...props.control('phone')} />
    <FormSubmit {...props} />
  </Form>
);

const PhoneForm = createForm({
  view: PhoneFormView,
  controls: {
    phone: {
      title: 'Phone',
      component: PhoneInput,
    },
  },
});

<Story>
  <PhoneForm />
</Story>
```
