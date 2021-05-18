Select example:

```js
import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormSubmit from '../../FormSubmit';
import Select from './Select';

const InputFormView = props => (
  <Form>
    <Field {...props.control('select')} />
    <FormSubmit {...props} />
  </Form>
);

const InputForm = createForm({
  view: InputFormView,
  controls: {
    select: {
      title: 'Select',
      component: Select,
      required: true,
    },
  },
});

<Story>
  <InputForm />
</Story>
```
