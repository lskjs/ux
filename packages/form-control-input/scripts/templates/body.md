Input example:

```js
import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormSubmit from '../../FormSubmit';
import Input from './Input';

const InputFormView = props => (
  <Form>
    <Field {...props.control('input')} />
    <FormSubmit {...props} />
  </Form>
);

const InputForm = createForm({
  view: InputFormView,
  controls: {
    input: {
      title: 'Input',
      component: Input,
      required: true,
    },
  },
});

<Story>
  <InputForm />
</Story>
```
